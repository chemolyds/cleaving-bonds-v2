using cleaving_bonds_v2.Server.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace cleaving_bonds_v2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IdentityController : ControllerBase
    {
        private readonly SignInManager<ApplicationUser> _signInManager;

        public IdentityController(SignInManager<ApplicationUser> signInManager)
        {
            _signInManager = signInManager;
        }

        [HttpPost("logout")]
        [Authorize]
        public async Task<IResult> Logout(object empty)
        {
            if (empty != null)
            {
                await _signInManager.SignOutAsync();
                return Results.Ok();
            }
            return Results.Unauthorized();
        }

        [HttpGet("isLoggedIn")]
        [Authorize]
        public IResult GetIsLoggedIn()
        {
            return Results.Ok(true);
        }
    }
}
