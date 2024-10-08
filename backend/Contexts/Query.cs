using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;
using HotChocolate.Authorization;

namespace backend.Contexts
{
    public class Query
    {
        [Authorize]
        [UseProjection]
        [UseFiltering]
        [UseSorting]
        public IQueryable<Sheet> GetSheets([Service] AppDbContext dbContext) => dbContext.Sheets;

        [UseProjection]
        [UseFiltering]
        [UseSorting]
        public IQueryable<User> GetUsers([Service] AppDbContext dbContext) => dbContext.Users;
    }
}