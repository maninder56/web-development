using API.Models.EmailSettings;
using Microsoft.Extensions.Options;

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
            
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error sending email: {ex.Message}");
            throw;
        }
    }
}
