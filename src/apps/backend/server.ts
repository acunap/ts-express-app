import * as http from 'http';
import express, { Express, json, NextFunction, Request, Response } from 'express';
import { ResponseError } from '@errors/ResponseError';
import { NotFoundError } from '@errors/NotFoundError';
import { Config } from '@backend/config/Config';
import Logger from '@backend/logger/Logger';
import { Route } from '@backend/routes/Route';

export class Server {
  readonly app: Express;
  private readonly config: Config;
  private readonly logger: Logger;
  private readonly routes: Route[];
  private server?: http.Server;

  constructor(config: Config, logger: Logger, ...routes: Route[]) {
    this.app = express();
    this.config = config;
    this.logger = logger;
    this.routes = routes;
  }

  start(): void {
    const port = this.config.getPort();
    const env = this.config.getEnv();

    this.app.use(json());
    this.app.use(this.logger.getRequestsMiddleware());

    this.routes.forEach((route) => {
      this.app.use(route.getRouter());
    });

    this.app.use((req: Request, _res: Response) => {
      throw new NotFoundError(`${req.url} not found`);
    });

    this.app.use((err: ResponseError, req: Request, res: Response, _next: NextFunction) => {
      res.err = err;
      return res.status(err.status).json({ err: err.message });
    });

    this.server = this.app.listen(port, () => {
      this.logger.info(`Server started on ${port} port - ${env} mode`);
    });
  }

  stop(): void {
    if (this.server != null) {
      this.server.close();
    }
  }
}
