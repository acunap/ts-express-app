import { Router } from 'express';
import { StatusGetController } from '../../controllers/status/StatusGetController';

export function registerStatusGetRoute(router: Router) {
  router.get('/status', new StatusGetController().run);
}
