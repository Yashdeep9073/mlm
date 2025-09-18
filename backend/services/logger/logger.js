const winston = require("winston");
const path = require("path");
const fs = require("fs");

// Create logs directory if it doesn't exist
const logsDir = path.join(__dirname, "..", "..", "public", "logs");
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: "user-service" },
  transports: [
    // Write all logs with level `info` and below to combined.log
    new winston.transports.File({
      filename: path.join(
        __dirname,
        "..",
        "..",
        "public",
        "logs",
        "combined.log"
      ),
    }),

    // Write all logs with level `error` and below to error.log
    new winston.transports.File({
      filename: path.join(__dirname, "..", "..", "public", "logs", "error.log"),
      level: "error",
    }),

    // Daily rotating files
    new (require("winston-daily-rotate-file"))({
      filename: path.join(
        __dirname,"..","..","public","logs","application-%DATE%.log"
      ),
      datePattern: "YYYY-MM-DD",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d",
    }),

    // Console transport
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
  ],
});

module.exports = logger;
