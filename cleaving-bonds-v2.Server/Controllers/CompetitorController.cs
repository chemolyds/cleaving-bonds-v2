using cleaving_bonds_v2.Server.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.Caching;

namespace cleaving_bonds_v2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class CompetitorController : ControllerBase
    {
        public readonly WccContext _context;

        public CompetitorController(WccContext context)
        {
            _context = context;
        }

        [HttpGet("isCatalyzed")]
        [AllowAnonymous]
        public IResult GetIsCatalyzed()
        {
            return Results.Ok((bool)MemoryCache.Default["IsCatalyzed"]);
        }

        [HttpGet("teamName")]
        public IResult GetTeamName()
        {
            return Results.Ok("hello world");
        }

        [HttpGet("teamId")]
        public IResult GetTeamId()
        {
            return Results.Ok(1);
        }
    }
}
