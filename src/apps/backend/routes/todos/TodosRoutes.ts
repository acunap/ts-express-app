import { Router } from 'express';
import { Route } from '@backend/routes/Route';
import { TodosPutRoute } from '@backend/routes/todos/TodosPutRoute';

export class TodosRoutes implements Route {
  constructor(private readonly todosPutRoute: TodosPutRoute) {}

  getRouter(): Router {
    return Router().use('/todos', this.todosPutRoute.getRouter());
  }
}
