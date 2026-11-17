using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Diagnostics.HealthChecks;

namespace API.Controllers; 

[Route("api/[controller]")]
[ApiController]
public class HealthController : ControllerBase
{
    private readonly HealthCheckService healthCheckService; 

    public HealthController(HealthCheckService healthCheckService)
    {
        this.healthCheckService = healthCheckService;
    }


    [HttpGet]
    public async Task<IActionResult> GetHealthStatus()
    {
        var healthReport = await healthCheckService.CheckHealthAsync();
        var status = healthReport.Status.ToString();
        var details = healthReport.Entries.Select(entry => new
        {
            entry.Key,
            entry.Value.Status,
            entry.Value.Description
        });
        return Ok(new { status, details });
    }
}

