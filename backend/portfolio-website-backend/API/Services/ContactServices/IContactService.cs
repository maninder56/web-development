using API.DTOs.Contact.Requests;
using API.Models.Result;

namespace API.Services.ContactServices; 

public interface IContactService
{
    // Create
    public Task<Result> CreateNewMessageAsync(NewMessageRequest newMessageRequest);
}
