using DatabaseContext;
using Microsoft.Extensions.Diagnostics.HealthChecks;

namespace API.HealthChecks; 

public class DatabaseHealthCheck : IHealthCheck
{
    private readonly PortfolioContext _context; 
    private readonly ILogger<DatabaseHealthCheck> _logger;

    public DatabaseHealthCheck(PortfolioContext context, ILogger<DatabaseHealthCheck> logger)
    {
        _context = context;
        _logger = logger;
    }

    public async Task<HealthCheckResult> CheckHealthAsync(HealthCheckContext context, CancellationToken cancellationToken = default)
    {
        try
        {
            bool isDatabaseHealthy = await _context.Database.CanConnectAsync(cancellationToken);

            if (isDatabaseHealthy)
            {
                return HealthCheckResult.Healthy("Database connection is successful.");
            }
            else
            {
                _logger.LogWarning("Database connection is unsuccessful.");
                return HealthCheckResult.Unhealthy("Database connection is unsuccessful.");
            }

        } catch (Exception ex)
        {
            _logger.LogCritical(ex, "An error occurred while checking the database health.");
            return HealthCheckResult.Unhealthy("The database connection failed.");
        }
    }
}
