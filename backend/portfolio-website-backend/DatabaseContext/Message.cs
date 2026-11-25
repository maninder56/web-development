using DatabaseContext.Types;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DatabaseContext;

[Table("Messages")]
public class Message
{
    [Key]
    public int MessageId { get; set; }

    [StringLength(100)]
    public required string Name { get; set; }

    [StringLength(250)]
    public required string Email { get; set; }

    [StringLength(2000)]
    public required string MessageContent { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public MessageSentStatus SentStatus { get; set; } = MessageSentStatus.Pending;
}
