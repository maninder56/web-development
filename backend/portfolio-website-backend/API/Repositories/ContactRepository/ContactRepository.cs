using API.DTOs.Contact.Requests;
using API.Models.Result;
using DatabaseContext;
using DatabaseContext.Types;

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


    // Update Operations

    public async Task UpdateMessageSentStatusAsync(int messageId, MessageSentStatus sentStatus)
    {
        var message = await context.Messages.FindAsync(messageId)
            ?? throw new InvalidOperationException($"Message with ID {messageId} not found.");

        message.SentStatus= sentStatus;

        await context.SaveChangesAsync();

    }
}
