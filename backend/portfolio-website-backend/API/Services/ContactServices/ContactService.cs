using API.DTOs.Contact.Requests;
using API.Models.Result;
using API.Repositories.ContactRepository;
using API.Services.EmailServices;
using DatabaseContext;
using DatabaseContext.Types;

namespace API.Services.ContactServices;

public class ContactService : IContactService
{
    private readonly ILogger<ContactService> logger;
    private readonly IContactRepository contactRepository;
    private readonly IEmailService emailService;

    public ContactService(ILogger<ContactService> logger, IContactRepository contactRepository, IEmailService emailService)
    {
        this.logger = logger;
        this.contactRepository = contactRepository;
        this.emailService = emailService;
    }

    public async Task<Result> CreateNewMessageAsync(NewMessageRequest newMessageRequest)
    {
        try
        {   
            var newMessage = new Message
            {
                Name = newMessageRequest.Name,
                Email = newMessageRequest.Email, 
                MessageContent = newMessageRequest.Message,
            };

            await contactRepository.CreateNewMessageAsync(newMessage);

            try
            {
                // Attempt to send email
                await emailService.SendClientMessageByEmailAsync(newMessage);

                await contactRepository.UpdateMessageSentStatusAsync(newMessage.MessageId, MessageSentStatus.Sent);
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Failed to send email for message ID {MessageId}.", newMessage.MessageId);
                await contactRepository.UpdateMessageSentStatusAsync(newMessage.MessageId, MessageSentStatus.Failed);
            }

            return Result.Success();    
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "An error occurred while creating a new message.");
            return Result.Failed(ErrorType.InternalServerError, "Unexpected error occurred.");
        }
    }
}
    