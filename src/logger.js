// Import logging tools from Winston
const { createLogger, trnsports, format, transport, transports } = require('winston');

// Create a logger instance
const logger = createLogger({
    // Set default logging level
    level: 'info',

    // Format logs with timestamp and readable format
    format: format.combine(
        // Add current date/time
        format.timestamp(), 
        // Formats the output string
        format.printf(info => `[${info.timestamp}] ${info.level.toUpperCase()}; ${info.message}`)
    ),

    // Output logs to the console
    transports: [
        new transports.Console()
    ]
});

module.exports = logger;