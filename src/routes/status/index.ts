import { Router } from 'express';
import { registerStatusGetRoute } from './status-get.route';
import { DIContainer } from '../../dependency-injection/DIContainer';

export function createStatusRouter(container: DIContainer): Router {
  const router = Router();

  registerStatusGetRoute(router, container);

  return router;
}
