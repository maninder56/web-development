using API.DTOs.Contact.Requests;
using DatabaseContext;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers; 

[Route("api/[controller]")]
[ApiController]
public class ContactController : ControllerBase
{
    private ILogger<ContactController> logger;
    private PortfolioContext context; 

    public ContactController(ILogger<ContactController> logger, PortfolioContext context)
    {
        this.logger = logger;
        this.context = context;
    }


    [HttpPost]
    public async Task<IActionResult> CreateNewMessage([FromBody] NewMessageRequest request)
    {
        throw new NotImplementedException();
    }

}
