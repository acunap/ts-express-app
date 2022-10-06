import { TodoRepository } from '@todos/domain/TodoRepository';
import { Todo } from '@todos/domain/Todo';

export class InMemoryTodoRepository implements TodoRepository {
  private readonly todos = [] as Todo[];

  save(todo: Todo): void {
    this.todos.push(todo);
  }

  searchAll(): Todo[] {
    return this.todos;
  }
}
