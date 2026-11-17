using API.DTOs.Contact.Requests;
using API.Models.Result;
using DatabaseContext;

namespace API.Repositories.ContactRepository; 

public interface IContactRepository
{
    // Create
    public Task<Message> CreateNewMessageAsync(Message newMessage); 
}
