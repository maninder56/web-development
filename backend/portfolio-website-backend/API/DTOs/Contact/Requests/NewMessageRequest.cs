using System.ComponentModel.DataAnnotations;

namespace API.DTOs.Contact.Requests; 

public class NewMessageRequest
{
    [MinLength(1, ErrorMessage = "Name must be at least 1 character long.")]
    [StringLength(100, ErrorMessage = "Name cannot exceed 100 characters.")]
    public string? Name { get; set; }

    [EmailAddress(ErrorMessage = "Invalid email address format.")]
    [StringLength(250, ErrorMessage = "Email cannot exceed 250 characters.")]
    public string? Email { get; set; }

    [MinLength(1, ErrorMessage = "Message must be at least 1 character long.")]
    [StringLength(2000, ErrorMessage = "Message cannot exceed 2000 characters.")]
    public string? MessageContent { get; set; }
}
