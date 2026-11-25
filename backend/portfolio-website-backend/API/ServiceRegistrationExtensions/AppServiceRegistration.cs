using API.Models.EmailSettings;
using API.Services.ContactServices;
using API.Services.EmailServices;
using System.Threading.RateLimiting;

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

        services.AddScoped<IEmailService, EmailService>();  

        return services;
    }

    public static IServiceCollection AddRateLimitService(this IServiceCollection services)
    {
        services.AddRateLimiter(options =>
        {
            options.AddPolicy("ContactRateLimit", httpContext =>
                RateLimitPartition.GetFixedWindowLimiter(
                    partitionKey: httpContext.Connection.RemoteIpAddress?.ToString() ?? "unknown",
                    factory: partition => new FixedWindowRateLimiterOptions
                    {
                        AutoReplenishment = true,
                        PermitLimit = 5, // Maximum number of requests allowed in the window
                        Window = TimeSpan.FromMinutes(1), // Time window duration
                        QueueProcessingOrder = QueueProcessingOrder.OldestFirst,
                        QueueLimit = 0 // No queuing, reject requests exceeding the limit
                    })
                );
            
            options.RejectionStatusCode = StatusCodes.Status429TooManyRequests;

            options.OnRejected = async (context, cancellationToken) =>
            {
                context.HttpContext.Response.Headers["Retry-After"] = "60"; // Suggests the client to retry after 60 seconds
                await context.HttpContext.Response.WriteAsJsonAsync(
                    new { message = "Too many requests. Please try again later." }, cancellationToken);
            };
        });

        return services;
    }
}
