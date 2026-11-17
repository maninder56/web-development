using API.DTOs.Contact.Requests;
using API.Models.Result;
using DatabaseContext;

namespace API.Repositories.ContactRepository;

public class ContactRepository : IContactRepository
{
    private readonly ILogger<ContactRepository> logger;

    private PortfolioContext context; 

    public ContactRepository(ILogger<ContactRepository> logger, PortfolioContext context)
    {
        this.logger = logger;
        this.context = context;
    }


    // Create Operations

    public async Task<Message> CreateNewMessageAsync(Message newMessage)
    {
        context.Add(newMessage);
        await context.SaveChangesAsync();
        return newMessage;
    }
}
