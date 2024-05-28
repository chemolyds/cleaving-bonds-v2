using System.ComponentModel.DataAnnotations;
using cleaving_bonds_v2.Server.Models.Questions;

namespace cleaving_bonds_v2.Server.Models.Submissions
{
    public class Submission
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public bool IsCatalyzed { get; set; } = false;

        [Required]
        public bool IsGraded { get; set; } = false;

        public float? RawScore { get; set; }
        public float? FinalScore { get; set; }

        public int UserId { get; set; }
        public ApplicationUser? User { get; set; }

        public int QuestionId { get; set; }
        public Question? Question { get; set; }
    }
}
