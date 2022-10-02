import express, { Express } from 'express';
import { createStatusRouter } from './routes/status';
import { NodeDependencyInjectionDIContainer } from './dependency-injection/NodeDependencyInjectionDIContainer';
import { DIContainer } from './dependency-injection/DIContainer';

export class Server {
  readonly app: Express;

  constructor() {
    this.app = express();
  }

  async start(port: number): Promise<void> {
    const container = new NodeDependencyInjectionDIContainer();
    await container.boot();

    this.initRoutes(container);

    this.app.listen(port, () => {
      console.log(`Server started on ${port} port`);
    });
  }

  private initRoutes(container: DIContainer) {
    this.app.use(createStatusRouter(container));
  }
}
