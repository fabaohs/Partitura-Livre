using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Contexts;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace backend.Extensions
{
    public static class ServiceExtensions
    {

        public static void AddDefaultServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddEndpointsApiExplorer();
            services.AddDbContext(configuration);
            services.AddCustomCors(configuration);
            services.AddAuth();
            services.AddGQLServer();
            services.AddDepInjection();
        }

        public static void AddCustomCors(this IServiceCollection services, IConfiguration configuration)
        {
            var corsOrigins = configuration["CORS:AllowedOrigins"] ?? "http://localhost:3000";

            services.AddCors(options =>
                options.AddDefaultPolicy(cfg =>
                cfg
                    .WithOrigins(corsOrigins)
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                )
            );
        }

        public static void AddDbContext(this IServiceCollection services, IConfiguration configuration)
        {
            var connectionString = configuration.GetConnectionString("DefaultConnection");

            services.AddDbContext<AppDbContext>(options => options.UseSqlServer(connectionString));
        }

        public static void AddAuth(this IServiceCollection services)
        {
            services.AddAuthorization();
            services.AddAuthentication().AddCookie(IdentityConstants.ApplicationScheme);
        }

        public static void AddGQLServer(this IServiceCollection services)
        {
            services.AddGraphQLServer()
                .AddQueryType<Query>()
                .AddMutationType<Mutation>()
                .AddAuthorization()
                .AddProjections()
                .AddFiltering()
                .AddSorting();
        }

        public static void AddDepInjection(this IServiceCollection services)
        {
            services.AddScoped<Mutation>();
        }
    }
}