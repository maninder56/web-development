using System.ComponentModel.DataAnnotations;

namespace API.DTOs.Contact.Requests; 

public class NewMessageRequest : IValidatableObject
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


    public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
    {
        if (string.IsNullOrWhiteSpace(Name))
        {
            yield return new ValidationResult("Name cannot be empty or whitespace.", [nameof(Name)]);
        }

        if (string.IsNullOrWhiteSpace(Email))
        {
            yield return new ValidationResult("Email cannot be empty or whitespace.", [nameof(Email)]);
        }

        if (string.IsNullOrWhiteSpace(MessageContent))
        {
            yield return new ValidationResult("Message cannot be empty or whitespace.", [nameof(MessageContent)]);
        }

        if (Name.Any(char.IsControl))
        {
            yield return new ValidationResult(
                "Name contains invalid characters.",
                [nameof(Name)]);
        }

        if (Email.Any(char.IsControl))
        {
            yield return new ValidationResult(
                "Email contains invalid characters.",
                [nameof(Email)]);
        }

        if (MessageContent.Any(c =>
            char.IsControl(c) && c != '\r' && c != '\n' && c != '\t'))
        {
            yield return new ValidationResult(
                "Message contains invalid control characters.",
                [nameof(MessageContent)]);
        }
    }
}
