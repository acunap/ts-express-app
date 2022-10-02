import { Router } from 'express';
import { registerStatusGetRoute } from './status-get.route';

export function createStatusRouter(): Router {
  const router = Router();

  registerStatusGetRoute(router);

  return router;
}
