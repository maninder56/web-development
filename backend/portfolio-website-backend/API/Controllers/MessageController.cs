using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers; 

[Route("api/[controller]")]
[ApiController]
public class MessageController : ControllerBase
{
    private ILogger<MessageController> logger; 

    public MessageController(ILogger<MessageController> logger)
    {
        this.logger = logger;
    }



    [HttpGet]
    public async Task<IActionResult> GetMessages()
    {
        logger.LogInformation("GetMessages called");
        return Ok(new { message = "Hello from the API!" });
    }
}
