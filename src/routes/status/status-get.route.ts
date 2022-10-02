import { Router } from 'express';
import { StatusGetController } from '../../controllers/status/StatusGetController';
import { DIContainer } from '../../dependency-injection/DIContainer';

export function registerStatusGetRoute(router: Router, container: DIContainer) {
  const controller: StatusGetController = container.getService(
    'Controllers.StatusGetController',
  );

  router.get('/status', controller.run);
}
