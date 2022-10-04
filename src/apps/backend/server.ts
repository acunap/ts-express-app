import * as http from 'http';
import express, { Express } from 'express';
import { createStatusRouter } from '@backend/routes/status';
import { NodeDependencyInjectionDIContainer } from '@backend/dependency-injection/NodeDependencyInjectionDIContainer';
import { DI_TYPES, DIContainer } from '@backend/dependency-injection/DIContainer';
import { Config } from '@backend/config/Config';
import Logger from '@backend/logger/Logger';

export class Server {
  readonly app: Express;
  private server?: http.Server;

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

    this.server = this.app.listen(port, () => {
      logger.info(`Server started on ${port} port - ${env} mode`);
    });
  }

  stop(): void {
    if (this.server != null) {
      this.server.close();
    }
  }

  private initRoutes(container: DIContainer): void {
    this.app.use(createStatusRouter(container));
  }
}
