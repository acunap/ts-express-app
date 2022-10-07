import { Request, Response } from 'express';
import { Controller } from '@backend/controllers/Controller';
import { TodosCreator } from '@todos/application/TodosCreator';
import { TodoId } from '@todos/domain/TodoId';
import { TodoTitle } from '@todos/domain/TodoTitle';
import { TodoDescription } from '@todos/domain/TodoDescription';
import { Todo } from '@todos/domain/Todo';

export class TodosPutController implements Controller {
  constructor(private readonly creator: TodosCreator) {}

  run(req: Request, res: Response): void {
    const { id, title, description } = req.body;
    const todo = new Todo(new TodoId(id), new TodoTitle(title), new TodoDescription(description));

    this.creator.create(todo);

    res.status(201).json({});
  }
}
