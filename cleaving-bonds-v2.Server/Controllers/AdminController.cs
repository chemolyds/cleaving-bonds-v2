using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.Caching;

namespace cleaving_bonds_v2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class AdminController : ControllerBase
    {
        [HttpGet("toggleCatalyze")]
        public ActionResult ToggleCatalyze()
        {
            bool isCatalyzed = (bool)MemoryCache.Default["IsCatalyzed"];
            MemoryCache.Default["IsCatalyzed"] = !isCatalyzed;
            return NoContent();
        }
    }
}
