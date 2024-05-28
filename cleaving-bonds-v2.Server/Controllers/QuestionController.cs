using cleaving_bonds_v2.Server.Data;
using cleaving_bonds_v2.Server.Models;
using cleaving_bonds_v2.Server.Models.Questions;
using cleaving_bonds_v2.Server.Models.Submissions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace cleaving_bonds_v2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class QuestionController : ControllerBase
    {
        private readonly WccContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        public QuestionController(WccContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<QuestionStatusByTier>>> GetQuestionGroupsPersonal()
        {
            // check to see if the user actually exists
            var user = await _userManager.GetUserAsync(User);
            if (user == null)
            {
                return Unauthorized();
            }

            // grab all the questions and their completion status
            IQueryable<QuestionStatus> questionStatuses =
                from question in _context.Questions
                join submission in
                    from submission in _context.Submissions
                    where submission.UserId == user.Id
                    select submission
                on question.Id equals submission.QuestionId into groupJoin // groups the submissions in case there is more than 1
                from joinedSubmission in groupJoin.DefaultIfEmpty() // is equivalent to a left join, will keep rows even if there is no submission
                select new QuestionStatus
                {
                    Id = question.Id,
                    Topic = question.Topic,
                    Tier = question.Tier,
                    IsSubmitted = joinedSubmission.UserId >= 0 // this means that a user did submit something since their ID is valid
                    // ignore the form link to avoid leaks
                };

            // group them by tier for easy ingestion by the frontend
            IQueryable<QuestionStatusByTier> questionStatusesByTier =
                from question in questionStatuses
                group question by question.Tier into questionGroup
                select new QuestionStatusByTier
                {
                    Tier = questionGroup.Key,
                    Questions = questionGroup.ToArray()
                };

            return await questionStatusesByTier.AsNoTracking().ToListAsync();
        }

        [HttpGet("{tier}/{topic}")]
        public async Task<ActionResult<Question>> GetQuestionPersonal(Tier tier, Topic topic)
        {
            // check to see if the question exists
            IQueryable<Question> questionQuery = _context.Questions
                .Where(q => q.Tier == tier && q.Topic == topic)
                .AsNoTracking();
            // we know Single() throws an exception if the query doesn't return exactly 1
            //      so we can do it this way to avoid the "expensive" try/catch
            if (questionQuery.Count() != 1)
            {
                return NotFound();
            }

            Question question = questionQuery.Single();

            // check to see if the team has completed it
            var user = await _userManager.GetUserAsync(User);
            if (user == null || UserHasCompleted(user, question.Id))
            {
                return Unauthorized();
            }

            return question;
        }

        private bool UserHasCompleted(ApplicationUser user, int questionId)
        {
            IEnumerable<Submission> submissions =
                from submission in _context.Submissions
                where submission.QuestionId == questionId && submission.UserId == user.Id
                select submission;

            return submissions.Count() > 0;
        }
    }
}
