import { Request, Response } from 'express';

export class StatusGetController {
  run(req: Request, res: Response) {
    res.status(200).json({ status: 'Ok' });
  }
}
