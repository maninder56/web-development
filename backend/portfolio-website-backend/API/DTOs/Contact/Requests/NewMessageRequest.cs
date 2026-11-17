using System.ComponentModel.DataAnnotations;

namespace API.DTOs.Contact.Requests; 

public class NewMessageRequest
{
    [Required(ErrorMessage = "Name is required.")]
    [MinLength(1, ErrorMessage = "Name must be at least 1 character long.")]
    [StringLength(100, ErrorMessage = "Name cannot exceed 100 characters.")]
    public required string Name { get; set; }

    [Required(ErrorMessage = "Email is required.")]
    [EmailAddress(ErrorMessage = "Invalid email address format.")]
    [StringLength(250, ErrorMessage = "Email cannot exceed 250 characters.")]
    public required string Email { get; set; }

    [Required(ErrorMessage = "Message is required.")]
    [MinLength(1, ErrorMessage = "Message must be at least 1 character long.")]
    [StringLength(2000, ErrorMessage = "Message cannot exceed 2000 characters.")]
    public required string MessageContent { get; set; }
}
