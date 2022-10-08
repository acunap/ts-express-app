import { Request, Response, Router } from 'express';
import { StatusGetController } from '@backend/controllers/status/StatusGetController';
import { Route } from '@backend/routes/Route';
import { runAsyncWrapper } from '@backend/routes/RunAsyncWrapper';

export class StatusGetRoute implements Route {
  constructor(private readonly controller: StatusGetController) {}

  getRouter(): Router {
    return Router().get(
      '/',
      runAsyncWrapper(async (req: Request, res: Response) => this.controller.run(req, res)),
    );
  }
}
