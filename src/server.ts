import express, { Express } from 'express';
import { createStatusRouter } from './routes/status';
import { NodeDependencyInjectionDIContainer } from './dependency-injection/NodeDependencyInjectionDIContainer';
import { DI_TYPES, DIContainer } from './dependency-injection/DIContainer';
import { Config } from './config/Config';
import Logger from './logger/Logger';

export class Server {
  readonly app: Express;

  constructor() {
    this.app = express();
  }

  start(): void {
    const container = new NodeDependencyInjectionDIContainer();

    const configService: Config = container.getService(DI_TYPES.Config);
    const port = configService.getPort();
    const env = configService.getEnv();

    const logger: Logger = container.getService(DI_TYPES.Logger);
    this.app.use(logger.getRequestsMiddleware());

    this.initRoutes(container);

    this.app.listen(port, () => {
      logger.info(`Server started on ${port} port - ${env} mode`);
    });
  }

  private initRoutes(container: DIContainer): void {
    this.app.use(createStatusRouter(container));
  }
}
