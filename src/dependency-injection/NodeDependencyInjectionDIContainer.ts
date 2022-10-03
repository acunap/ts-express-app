import { ContainerBuilder } from 'node-dependency-injection';
import { DI_TYPES, DIContainer } from './DIContainer';
import ConvictConfig from '../config/ConvictConfig';
import { StatusGetController } from '../controllers/status/StatusGetController';

export class NodeDependencyInjectionDIContainer implements DIContainer {
  private readonly container: ContainerBuilder;

  constructor() {
    this.container = new ContainerBuilder();

    this.container.register(DI_TYPES.Config, ConvictConfig);
    this.container.register(DI_TYPES.StatusGetController, StatusGetController);
  }

  getService(token: DI_TYPES): any {
    return this.container.get(token);
  }
}
