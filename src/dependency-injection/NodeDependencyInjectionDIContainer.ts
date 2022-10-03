import { ContainerBuilder, Reference } from 'node-dependency-injection';
import { StatusGetController } from '@controllers/status/StatusGetController';
import PinoLogger from '@logger/PinoLogger';
import { DI_TYPES, DIContainer } from '@dependency-injection/DIContainer';
import ConvictConfig from '@config/ConvictConfig';

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
