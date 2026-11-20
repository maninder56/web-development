using API.DTOs.Contact.Requests;
using API.Models.EmailSettings;
using DatabaseContext;
using Microsoft.Extensions.Options;
using System.Net;
using System.Net.Mail;

namespace API.Services.EmailServices; 

public class EmailService : IEmailService
{
    private ILogger<EmailService> _logger;
    private readonly EmailSettings emailSettings;

    public EmailService(IOptions<EmailSettings> emailSettings, ILogger<EmailService> logger)
    {
        this.emailSettings = emailSettings.Value;
        _logger = logger;
    }

    public async Task SendEmailAsync(string toEmail, string subject, string body, bool isHtml = false)
    {
        try
        {
            var from = new MailAddress(emailSettings.SenderEmail, emailSettings.SenderName); 
            var to = new MailAddress(toEmail);
            var message = new MailMessage(from, to)
            {
                Subject = subject,
                Body = body,
                IsBodyHtml = isHtml
            };

            using var client = new SmtpClient(emailSettings.SmtpServer, emailSettings.Port)
            {
                Credentials = new NetworkCredential(emailSettings.SenderEmail, emailSettings.SenderPassword),
                EnableSsl = true
            };

            await client.SendMailAsync(message);
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error sending email: {ex.Message}");
            throw;
        }
    }


    public async Task SendClientMessageByEmailAsync(Message message)
    {
        var name = WebUtility.HtmlEncode(message.Name); 
        var email = WebUtility.HtmlEncode(message.Email);
        var content = WebUtility.HtmlEncode(message.MessageContent);

        string subject = $"Portfolio contact: {name} ({email})";
        string body = $@"
            <div style=""font-family: Arial, Helvetica, sans-serif; max-width: 800px; margin: 0 auto; color: #222;"">
                <h2 style=""margin-bottom: 4px;"">New contact message</h2>
                <p style=""color: #777; margin-top: 0;"">Received {message.CreatedAt.ToString("dd MMMM yyyy, HH:mm 'UTC'")}</p>

                <table style=""width: 100%; border-collapse: collapse; margin: 16px 0;"">
                    <tr>
                        <td style=""padding: 8px; font-weight: bold; width: 80px; border-bottom: 1px solid #eee;"">Name</td>
                        <td style=""padding: 8px; border-bottom: 1px solid #eee; overflow-wrap: anywhere;"">{name}</td>
                    </tr>
                    <tr>
                        <td style=""padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;"">Email</td>
                        <td style=""padding: 8px; border-bottom: 1px solid #eee;"">
                            <a style=""overflow-wrap: anywhere;"" href=""mailto:{email}"">{email}</a>    
                        </td>
                    </tr>
                </table>

                <div style=""background: #f6f8fa; border-left: 4px solid #88c2ff; padding: 12px 16px; line-height: 1.5; overflow-wrap: anywhere;"">
                    {content}
                </div>
            </div>
            "; 

        await SendEmailAsync(emailSettings.SendToEmail, subject, body, true);
    }

}
