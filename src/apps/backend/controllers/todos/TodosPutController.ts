import { Request, Response } from 'express';
import { Controller } from '@backend/controllers/Controller';

export class TodosPutController implements Controller {
  run(req: Request, res: Response): void {
    res.status(201).json({});
  }
}
