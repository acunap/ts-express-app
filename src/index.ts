import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ status: 'Ok' });
});

app.listen(3000, () => {
  console.log('App started');
});
