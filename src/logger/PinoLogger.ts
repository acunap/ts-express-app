import { IncomingMessage, ServerResponse } from 'http';
import pino from 'pino';
import pinoHttp from 'pino-http';
import { Handler } from 'express';
import { v4 as uuid } from 'uuid';
import { Config, Environment } from '../config/Config';
import Logger from './Logger';

class PinoLogger implements Logger {
  private readonly logger;

  constructor(config: Config) {
    this.logger = pino({
      enabled: config.getEnv() !== Environment.TEST,
      level: config.getEnv() === Environment.DEVELOPMENT ? 'info' : 'error',
      transport: {
        target: 'pino-pretty',
        options: {
          hideObject: true,
        },
      },
    });
  }

  info(message: string): void {
    this.logger.info(message);
  }

  debug(message: string): void {
    this.logger.debug(message);
  }

  error(message: string, error?: Error): void {
    this.logger.error(message, error);
  }

  getRequestsMiddleware(): Handler {
    return pinoHttp({
      logger: this.logger,
      genReqId: (_req: IncomingMessage) => uuid(),
      customLogLevel: (_req: IncomingMessage, res: ServerResponse, _error: Error) => {
        return res.err === null ? 'error' : 'info';
      },
      customSuccessMessage: (req: IncomingMessage, res: ServerResponse) => `[${req.method}] ${req.url} - ${res.statusCode} ${res.statusMessage}`,
      customErrorMessage: (req: IncomingMessage, res: ServerResponse, error: Error) =>
        `[${req.method}] ${req.url} - ${res.statusCode} ${error.message}`,
    });
  }
}

export default PinoLogger;
