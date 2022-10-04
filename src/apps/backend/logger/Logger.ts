import { Handler } from 'express';

export default interface Logger {
  debug: (message: string) => void;
  error: (message: string, error?: Error) => void;
  info: (message: string) => void;
  getRequestsMiddleware: () => Handler;
}
