using API.DTOs.Contact.Requests;
using API.Services.ContactServices;
using API.Utility;
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
    private IContactService contactService; 

    public ContactController(ILogger<ContactController> logger, IContactService contactService)
    {
        this.logger = logger;
        this.contactService = contactService;
    }


    [HttpPost]
    public async Task<IActionResult> CreateNewMessage([FromBody] NewMessageRequest message)
    {
        var result = await contactService.CreateNewMessageAsync(message); 

        if (result.Successful)
        {
            return Created();
        }
        else
        {
            return result.Error.ErrorToActionResult(); 
        }
    }

}
