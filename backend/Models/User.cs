using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace backend.Models
{
    public class User
    {
        [Key]
        public Guid Id {get; set;} = new Guid();

        [Required]
        [MaxLength(255)]
        public string? Name {get; set;}

        [Required]
        [EmailAddress]
        [MaxLength(255)]
        public string? Email {get; set;}

        [MaxLength(32)]
        [JsonIgnore]
        public string? Password {get; set;}

    }
}