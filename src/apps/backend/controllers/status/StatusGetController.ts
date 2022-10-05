import { Request, Response } from 'express';
import { Controller } from '@backend/controllers/Controller';

export class StatusGetController implements Controller {
  run(req: Request, res: Response): void {
    res.status(200).json({ status: 'Ok' });
  }
}
