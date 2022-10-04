import { Router } from 'express';
import { DIContainer } from '@backend/dependency-injection/DIContainer';
import { registerStatusGetRoute } from '@backend/routes/status/status-get.route';

export function createStatusRouter(container: DIContainer): Router {
  const router = Router();

  registerStatusGetRoute(router, container);

  return router;
}
