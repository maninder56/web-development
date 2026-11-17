using API.Services.ContactServices;

namespace API.ServiceRegistrationExtensions; 

public static class AppServiceRegistration
{
    public static IServiceCollection AddAppServices(this IServiceCollection services)
    {
        services.AddScoped<IContactService, ContactService>();

        return services;
    }
}
