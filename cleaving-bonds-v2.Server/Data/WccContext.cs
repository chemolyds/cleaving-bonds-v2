using cleaving_bonds_v2.Server.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace cleaving_bonds_v2.Server.Data
{
    public class WccContext : IdentityDbContext<ApplicationUser, IdentityRole<int>, int>
    {
        public WccContext(DbContextOptions<WccContext> options) : base(options)
        {
        }
    }
}
