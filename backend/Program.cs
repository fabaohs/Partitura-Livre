using backend.Contexts;
using backend.Extensions;
using backend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDefaultServices(builder.Configuration);

var app = builder.Build();

app.MapGraphQL("/graphql");
app.UseCors();
app.UseAuthentication();
app.UseAuthorization();

app.Run();