﻿using cleaving_bonds_v2.Server.Data;
using cleaving_bonds_v2.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace cleaving_bonds_v2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LeaderboardController : ControllerBase
    {
        public readonly WccContext _context;

        public LeaderboardController(WccContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<LeaderboardItem>>> GetAllLeaderboard()
        {
            return new List<LeaderboardItem>();
        }

        [HttpGet("{tier}")]
        public async Task<ActionResult<IEnumerable<LeaderboardItem>>> GetTieredLeaderboard(Tier tier)
        {
            var rand = new Random();
            var teams = new List<LeaderboardItem>();
            var numTeams = rand.NextInt64(15);

            for (int i = 0; i < numTeams; i++)
            {
                teams.Add(new LeaderboardItem
                {
                    Name = tier.ToString() + " Team " + i,
                    SilverScore = (float)rand.NextDouble() * 4 * 4,
                    BronzeScore = (float)rand.NextDouble() * 8 * 4,
                    GoldScore = (float)rand.NextDouble() * 16 * 4,
                });
            }

            teams.Sort((left, right) => (int)(right.TotalScore - left.TotalScore));

            return teams;
        }
    }
}