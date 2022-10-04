import { Router } from 'express';
import { StatusGetController } from '@backend/controllers/status/StatusGetController';
import { DI_TYPES, DIContainer } from '@backend/dependency-injection/DIContainer';

export function registerStatusGetRoute(router: Router, container: DIContainer): void {
  const controller: StatusGetController = container.getService(DI_TYPES.StatusGetController);

  router.get('/status', controller.run);
}
