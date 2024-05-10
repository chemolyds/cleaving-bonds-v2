using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace cleaving_bonds_v2.Server.Data
{
    public class WccContext : IdentityDbContext<IdentityUser>
    {
        public WccContext(DbContextOptions<WccContext> options) : base(options)
        {
        }
    }
}
