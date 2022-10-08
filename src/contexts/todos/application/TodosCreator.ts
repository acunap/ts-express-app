import { Todo } from '@todos/domain/Todo';
import { TodoRepository } from '@todos/domain/TodoRepository';

export class TodosCreator {
  constructor(private readonly repository: TodoRepository) {}

  async create(todo: Todo): Promise<void> {
    await this.repository.save(todo);
  }
}
