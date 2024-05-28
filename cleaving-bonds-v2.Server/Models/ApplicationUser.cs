using Microsoft.AspNetCore.Identity;

namespace cleaving_bonds_v2.Server.Models
{
    public class ApplicationUser : IdentityUser<int>
    {
        public string Name { get; set; } = string.Empty;
        public Tier Tier { get; set; }
    }
}
