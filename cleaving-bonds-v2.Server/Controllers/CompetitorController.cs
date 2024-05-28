using cleaving_bonds_v2.Server.Data;
using Microsoft.AspNetCore.Mvc;

namespace cleaving_bonds_v2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompetitorController : ControllerBase
    {
        public readonly WccContext _context;

        public CompetitorController(WccContext context)
        {
            _context = context;
        }
    }
}
