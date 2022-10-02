import { ContainerBuilder, YamlFileLoader } from 'node-dependency-injection';
import { DIContainer } from './DIContainer';

export class NodeDependencyInjectionDIContainer implements DIContainer {
  private readonly container = new ContainerBuilder();

  async boot() {
    const loader = new YamlFileLoader(this.container);
    const env = process.env.NODE_ENV ?? 'development';
    await loader.load(`${__dirname}/application_${env}.yaml`);
  }

  getService(token: string): any {
    return this.container.get(token);
  }
}
