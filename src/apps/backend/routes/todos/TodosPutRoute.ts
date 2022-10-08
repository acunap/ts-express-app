import { Request, Response, Router } from 'express';
import { Route } from '@backend/routes/Route';
import { TodosPutController } from '@backend/controllers/todos/TodosPutController';

export class TodosPutRoute implements Route {
  constructor(private readonly controller: TodosPutController) {}

  getRouter(): Router {
    return Router().put('/:id', (req: Request, res: Response) => {
      void this.controller.run(req, res);
    });
  }
}
