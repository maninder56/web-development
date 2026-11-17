using Microsoft.AspNetCore.Cors.Infrastructure;

namespace API.ServiceRegistrationExtensions; 

public static class CorsServiceRegistration
{
    public static IServiceCollection AddCorsPolicy(this IServiceCollection services, IConfiguration configuration)
    {
        IConfigurationSection configurationSection = configuration.GetSection("CorsPolicy");

        string policyName = configurationSection["PolicyName"] ??
            throw new InvalidOperationException("Failed to get CORS policy name");

        string[] allowedOrigins = configurationSection.GetSection("AllowedOrigins").Get<string[]>() ??
            throw new InvalidOperationException("Failed to get CORS Allowed Origins");

        services.AddCors(options =>
        {
            options.AddPolicy(policyName, policy =>
            {
                policy.WithOrigins(allowedOrigins)
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials();
            });
        });

        return services;
    }
}
