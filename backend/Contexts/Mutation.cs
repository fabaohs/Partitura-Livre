using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Dto;
using Microsoft.AspNetCore.Mvc;

namespace backend.Contexts
{
    public class Mutation
    {

        private readonly ILogger<Mutation> _logger;
        public Mutation(ILogger<Mutation> logger)
        {
            _logger = logger;
        }

        public async Task<AddSheetDto?> AddSheet([Service] AppDbContext dbContext, AddSheetDto dto)
        {
            try{
                var sheet = new Models.Sheet
                {
                    Author = dto.Author,
                    Title = dto.Title
                };

                await dbContext.Sheets.AddAsync(sheet);
                await dbContext.SaveChangesAsync();

                return dto;
            } catch(Exception error){
                _logger.LogError("Error adding sheet: {Error}", error);
                return null;      
            }

        }

        public async Task<AddUserDto?> AddUser([Service] AppDbContext dbContext, AddUserDto user){
            try{
                var newUser = new Models.User
                {
                    Name = user.Name,
                    Email = user.Email,
                    Password = user.Password
                };

                await dbContext.Users.AddAsync(newUser);
                await dbContext.SaveChangesAsync();

                return user;
            } catch(Exception e){
                _logger.LogError("Error adding user: {Error}", e);
                return null;
            }         
        }
    }
}