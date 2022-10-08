import { Request, Response, Router } from 'express';
import { Route } from '@backend/routes/Route';
import { TodosPutController } from '@backend/controllers/todos/TodosPutController';
import { runAsyncWrapper } from '@backend/routes/RunAsyncWrapper';

export class TodosPutRoute implements Route {
  constructor(private readonly controller: TodosPutController) {}

  getRouter(): Router {
    return Router().put(
      '/:id',
      runAsyncWrapper(async (req: Request, res: Response) => await this.controller.run(req, res)),
    );
  }
}
