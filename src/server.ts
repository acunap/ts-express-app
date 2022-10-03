import express, { Express } from 'express';
import { createStatusRouter } from './routes/status';
import { NodeDependencyInjectionDIContainer } from './dependency-injection/NodeDependencyInjectionDIContainer';
import { DIContainer } from './dependency-injection/DIContainer';
import { Config } from './config/Config';

export class Server {
  readonly app: Express;

  constructor() {
    this.app = express();
  }

  async start(): Promise<void> {
    const container = new NodeDependencyInjectionDIContainer();
    await container.boot();

    this.initRoutes(container);

    const configService: Config = container.getService('Config.ConfigService');
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
