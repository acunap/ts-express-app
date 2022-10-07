import { Todo } from '@todos/domain/Todo';
import { TodoRepository } from '@todos/domain/TodoRepository';

export class TodosCreator {
  constructor(private readonly repository: TodoRepository) {}

  create(todo: Todo): void {
    this.repository.save(todo);
  }
}
