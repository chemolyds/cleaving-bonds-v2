using Microsoft.EntityFrameworkCore;

namespace cleaving_bonds_v2.Server.Data
{
    public class WccContext : DbContext
    {
        public WccContext(DbContextOptions<WccContext> options) : base(options)
        {
        }
    }
}
