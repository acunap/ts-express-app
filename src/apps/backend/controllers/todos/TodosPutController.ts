import { Request, Response } from 'express';
import { Controller } from '@backend/controllers/Controller';
import { TodosCreator } from '@todos/application/TodosCreator';
import { TodoId } from '@todos/domain/value-objects/TodoId';
import { TodoTitle } from '@todos/domain/value-objects/TodoTitle';
import { TodoDescription } from '@todos/domain/value-objects/TodoDescription';
import { Todo } from '@todos/domain/Todo';

export class TodosPutController implements Controller {
  constructor(private readonly creator: TodosCreator) {}

  async run(req: Request, res: Response): Promise<void> {
    const { id, title, description } = req.body;
    const todo = new Todo(new TodoId(id), new TodoTitle(title), new TodoDescription(description));

    await this.creator.create(todo);

    res.status(201).json();
  }
}
