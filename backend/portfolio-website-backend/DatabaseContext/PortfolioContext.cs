using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DatabaseContext; 

public class PortfolioContext : DbContext
{
    public DbSet<Message> Messages { get; set; }

    public PortfolioContext(DbContextOptions<PortfolioContext> options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Message>()
            .Property(m => m.SentStatus)
            .HasConversion<string>();

    }
}
