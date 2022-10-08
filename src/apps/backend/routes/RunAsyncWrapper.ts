import { NextFunction, Request, Response } from 'express';

export function runAsyncWrapper(callback: (req: Request, res: Response) => Promise<void>) {
  return function (req: Request, res: Response, next: NextFunction) {
    callback(req, res).catch(next);
  };
}
