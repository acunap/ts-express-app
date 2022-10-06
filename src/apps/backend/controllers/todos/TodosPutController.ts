import { Request, Response } from 'express';
import { Controller } from '@backend/controllers/Controller';
import { TodosCreator } from '@todos/application/TodosCreator';

export class TodosPutController implements Controller {
  constructor(private readonly creator: TodosCreator) {}

  run(req: Request, res: Response): void {
    const { id, title, description } = req.body;
    this.creator.create(id, title, description);

    res.status(201).json({});
  }
}
