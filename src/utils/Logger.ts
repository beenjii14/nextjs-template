import winston from 'winston';

const configLogger = {
    env: process.env.NODE_ENV || 'development',
    level: process.env.LEVEL || 'info',
    serviceName: process.env.SERVICE_NAME || 'service-name'
}

// Modify according to your needs
const timeZone = (): string => {
    return new Date().toLocaleString('es-MX', {
        timeZone: 'America/Mexico_City',
        hour12: true
    });
}

const { combine, timestamp, printf } = winston.format;
const debugFormat = printf(l => {
    let filename = module.id;
    filename = filename ? filename.split('/').pop() : '';
    return `${l.timestamp as string} [${filename} -> ${l.level}]: ${l.message as string}`;
});

const logger = winston.createLogger({
    level: configLogger.level,
    defaultMeta: {
        service: configLogger.serviceName
    },
    transports: [new winston.transports.Console()]
});

const formats = [
    winston.format.splat(),
    winston.format.simple(),
    winston.format.colorize(),
    winston.format.json({ space: 0 })
];

if (configLogger.env !== 'production') {
    formats.push(timestamp({ format: timeZone }), debugFormat);
}

logger.format = combine(...formats);
export const Logger = logger;
