using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Dto;

namespace backend.Contexts
{
    public class Mutation
    {

        private readonly ILogger<Mutation> _logger;
        public Mutation(ILogger<Mutation> logger)
        {
            _logger = logger;
        }

        public AddSheetDto AddSheet([Service] AppDbContext dbContext, AddSheetDto dto)
        {
            _logger.LogInformation("Adding sheet with title {Title} and author {Author}", dto.Title, dto.Author);

            var sheet = new Models.Sheet
            {
                Author = dto.Author,
                Title = dto.Title
            };

            dbContext.Sheets.Add(sheet);
            dbContext.SaveChanges();

            return dto;
        }
    }
}