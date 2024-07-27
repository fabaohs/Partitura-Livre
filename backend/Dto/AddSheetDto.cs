using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Dto
{
    public class AddSheetDto
    {
        [Required]
        public string? Author { get; set; }
        [Required]
        public string? Title { get; set; }
    }
}