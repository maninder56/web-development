using API.DTOs.Contact.Requests;
using API.Models.Result;
using API.Repositories.ContactRepository;
using DatabaseContext;

namespace API.Services.ContactServices;

public class ContactService : IContactService
{
    private readonly ILogger<ContactService> logger;
    private readonly IContactRepository contactRepository;

    public ContactService(ILogger<ContactService> logger, IContactRepository contactRepository)
    {
        this.logger = logger;
        this.contactRepository = contactRepository;
    }

    public async Task<Result> CreateNewMessageAsync(NewMessageRequest newMessageRequest)
    {
        try
        {
            await Task.Delay(100); // Simulate async operation
            
            var newMessage = new Message
            {
                Name = newMessageRequest.Name,
                Email = newMessageRequest.Email, 
                MessageContent = newMessageRequest.MessageContent,
            };

            await contactRepository.CreateNewMessageAsync(newMessage);
            return Result.Success();    
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "An error occurred while creating a new message.");
            return Result.Failed(ErrorType.InternalServerError, "Unexpected error occurred.");
        }
    }
}
    