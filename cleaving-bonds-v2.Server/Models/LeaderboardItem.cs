namespace cleaving_bonds_v2.Server.Models
{
    public class LeaderboardItem
    {
        public string Name { get; set; }
        public float BronzeScore { get; set; } = 0;
        public float SilverScore { get; set; } = 0;
        public float GoldScore { get; set; } = 0;

        public float TotalScore
        {
            get {
                return BronzeScore + SilverScore + GoldScore;
            }
        }
    }
}
