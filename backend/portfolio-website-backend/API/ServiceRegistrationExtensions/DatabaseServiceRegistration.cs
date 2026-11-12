using DatabaseContext;
using Microsoft.EntityFrameworkCore;

namespace API.ServiceRegistrationExtensions; 

public static class DatabaseServiceRegistration
{
    public static IServiceCollection AddDatabaseServices(this IServiceCollection services, IConfiguration configuration)
    {
        string connectionString = configuration.GetConnectionString("DefaultConnection")
            ?? throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");

        services.AddDbContext<PortfolioContext>(options =>
            options.UseSqlServer(connectionString));


        return services;
    }
}
