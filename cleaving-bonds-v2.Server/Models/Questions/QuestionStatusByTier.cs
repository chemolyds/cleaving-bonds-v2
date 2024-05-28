using System.Text.Json.Serialization;

namespace cleaving_bonds_v2.Server.Models.Questions
{
    public class QuestionStatusByTier
    {
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public Tier Tier { get; set; }

        public QuestionStatus[] Questions { get; set; } = null!;
    }
}
