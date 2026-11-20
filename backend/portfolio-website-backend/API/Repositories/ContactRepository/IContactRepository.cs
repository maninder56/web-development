using API.DTOs.Contact.Requests;
using API.Models.Result;
using DatabaseContext;
using DatabaseContext.Types;

namespace API.Repositories.ContactRepository; 

public interface IContactRepository
{
    // Create
    public Task<Message> CreateNewMessageAsync(Message newMessage);

    // Update
    public Task UpdateMessageSentStatusAsync(int messageId, MessageSentStatus sentStatus); 
}
