using DatabaseContext;

namespace API.Services.EmailServices; 

public interface IEmailService
{
    public Task SendEmailAsync(string toEmail, string subject, string body, bool isHtml = false);
    public Task SendClientMessageByEmailAsync(Message message); 
}
