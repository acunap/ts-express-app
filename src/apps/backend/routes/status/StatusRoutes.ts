import { Router } from 'express';
import { Route } from '@backend/routes/Route';
import { StatusGetRoute } from '@backend/routes/status/StatusGetRoute';

export class StatusRoutes implements Route {
  constructor(private readonly statusGetRoute: StatusGetRoute) {}

  getRouter(): Router {
    return Router().use('/status', this.statusGetRoute.getRouter());
  }
}
