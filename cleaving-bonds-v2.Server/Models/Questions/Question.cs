using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace cleaving_bonds_v2.Server.Models.Questions
{
    public enum Topic
    {
        Organic, Analytical, Physical, Inorganic
    }

    public class Question
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [EnumDataType(typeof(Topic))]
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public Topic Topic { get; set; }

        [Required]
        [EnumDataType(typeof(Tier))]
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public Tier Tier { get; set; }

        public string? FormLink { get; set; }
    }
}
