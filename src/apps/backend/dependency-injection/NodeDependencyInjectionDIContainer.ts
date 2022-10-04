import { ContainerBuilder, Reference } from 'node-dependency-injection';
import { StatusGetController } from '@backend/controllers/status/StatusGetController';
import PinoLogger from '@backend/logger/PinoLogger';
import { DI_TYPES, DIContainer } from '@backend/dependency-injection/DIContainer';
import ConvictConfig from '@backend/config/ConvictConfig';

export class NodeDependencyInjectionDIContainer implements DIContainer {
  private readonly container: ContainerBuilder;

  constructor() {
    this.container = new ContainerBuilder();

    this.container.register(DI_TYPES.Config, ConvictConfig);
    this.container.register(DI_TYPES.Logger, PinoLogger).addArgument(new Reference(DI_TYPES.Config));

    this.container.register(DI_TYPES.StatusGetController, StatusGetController);
  }

  getService(token: DI_TYPES): any {
    return this.container.get(token);
  }
}
