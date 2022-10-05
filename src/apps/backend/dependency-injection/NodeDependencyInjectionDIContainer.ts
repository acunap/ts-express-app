import { ContainerBuilder, Reference } from 'node-dependency-injection';
import PinoLogger from '@backend/logger/PinoLogger';
import { DI_TYPES, DIContainer } from '@backend/dependency-injection/DIContainer';
import ConvictConfig from '@backend/config/ConvictConfig';
import { Server } from '@backend/server';
import { StatusRoutes } from '@backend/routes/status/StatusRoutes';
import { StatusGetRoute } from '@backend/routes/status/StatusGetRoute';
import { StatusGetController } from '@backend/controllers/status/StatusGetController';

export class NodeDependencyInjectionDIContainer implements DIContainer {
  private readonly container: ContainerBuilder;

  constructor() {
    this.container = new ContainerBuilder();

    this.container
      .register(DI_TYPES.Server, Server)
      .addArgument(new Reference(DI_TYPES.Config))
      .addArgument(new Reference(DI_TYPES.Logger))
      .addArgument(new Reference(DI_TYPES.StatusRoute));

    this.container.register(DI_TYPES.Config, ConvictConfig);
    this.container.register(DI_TYPES.Logger, PinoLogger).addArgument(new Reference(DI_TYPES.Config));

    this.container.register(DI_TYPES.StatusRoute, StatusRoutes).addArgument(new Reference(DI_TYPES.StatusGetRoute));
    this.container.register(DI_TYPES.StatusGetRoute, StatusGetRoute).addArgument(new Reference(DI_TYPES.StatusGetController));
    this.container.register(DI_TYPES.StatusGetController, StatusGetController);
  }

  getService(token: DI_TYPES): any {
    return this.container.get(token);
  }
}
