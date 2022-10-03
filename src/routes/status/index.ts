import { Router } from 'express';
import { DIContainer } from '../../dependency-injection/DIContainer';
import { registerStatusGetRoute } from './status-get.route';

export function createStatusRouter(container: DIContainer): Router {
  const router = Router();

  registerStatusGetRoute(router, container);

  return router;
}
