using API.Models.EmailSettings;
using API.Services.ContactServices;

namespace API.ServiceRegistrationExtensions; 

public static class AppServiceRegistration
{
    public static IServiceCollection AddAppServices(this IServiceCollection services)
    {
        services.AddScoped<IContactService, ContactService>();

        return services;
    }


    public static IServiceCollection AddEmailServices(this IServiceCollection services, IConfiguration configuration)
    {
        services.Configure<EmailSettings>(configuration.GetSection("EmailSettings"));
        
        return services;
    }
}
