using DatabaseContext;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers; 

[Route("api/[controller]")]
[ApiController]
public class MessageController : ControllerBase
{
    private ILogger<MessageController> logger;
    private PortfolioContext context; 

    public MessageController(ILogger<MessageController> logger, PortfolioContext context)
    {
        this.logger = logger;
        this.context = context;
    }



    [HttpGet("Hello")]
    public async Task<IActionResult> HelloAPI()
    {
        logger.LogInformation("GetMessages called");
        return Ok(new { message = "Hello from the API!" });
    }


    [HttpGet]
    public async Task<IActionResult> AllMessages()
    {
        var messages = await context.Messages.ToListAsync();  
        logger.LogInformation("AllMessages called, returning {Count} messages", messages.Count);
        return Ok(messages);
    }
}
