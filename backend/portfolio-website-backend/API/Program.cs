using API.Handler;
using API.HealthChecks;
using API.ServiceRegistrationExtensions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddProblemDetails();

// Register health checks
builder.Services.AddHealthChecks()
    .AddCheck<DatabaseHealthCheck>("Database");

// Add database services
builder.Services.AddDatabaseServices(builder.Configuration);

// Add application services
builder.Services.AddAppServices();

// ADd email services
builder.Services.AddEmailServices(builder.Configuration);

// Add CORS policy
builder.Services.AddCorsPolicy(builder.Configuration);

// Global Exception handler
builder.Services.AddExceptionHandler<GlobalExceptionHandler>();

// Add rate limiting service
builder.Services.AddRateLimitService();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseRouting(); 


string corsPolicyName = builder.Configuration["CorsPolicy:PolicyName"] ??
    throw new InvalidOperationException("Failed to get Cors policy name");

app.UseCors(corsPolicyName);

app.UseRateLimiter(); 

app.UseAuthorization();

app.MapControllers();

app.Run();
