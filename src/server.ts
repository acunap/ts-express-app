import express, { Express } from 'express';
import { createStatusRouter } from './routes/status';
import { NodeDependencyInjectionDIContainer } from './dependency-injection/NodeDependencyInjectionDIContainer';
import { DI_TYPES, DIContainer } from './dependency-injection/DIContainer';
import { Config } from './config/Config';

export class Server {
  readonly app: Express;

  constructor() {
    this.app = express();
  }

  start(): void {
    const container = new NodeDependencyInjectionDIContainer();

    this.initRoutes(container);

    const configService: Config = container.getService(DI_TYPES.Config);
    const port = configService.getPort();
    const env = configService.getEnv();

    this.app.listen(port, () => {
      console.log(`Server started on ${port} port - ${env} mode`);
    });
  }

  private initRoutes(container: DIContainer) {
    this.app.use(createStatusRouter(container));
  }
}
