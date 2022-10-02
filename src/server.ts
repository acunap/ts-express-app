import express, { Express } from 'express';
import { createStatusRouter } from './routes/status';

export class Server {
  readonly app: Express;

  constructor() {
    this.app = express();

    this.initRoutes();
  }

  start(port: number): void {
    this.app.listen(port, () => {
      console.log(`Server started on ${port} port`);
    });
  }

  private initRoutes() {
    this.app.use(createStatusRouter());
  }
}
