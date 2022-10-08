import { TodoRepository } from '@todos/domain/TodoRepository';
import { Todo } from '@todos/domain/Todo';

export class InMemoryTodoRepository implements TodoRepository {
  private readonly todos = [] as Todo[];

  async save(todo: Todo): Promise<void> {
    this.todos.push(todo);
  }

  async searchAll(): Promise<Todo[]> {
    return this.todos;
  }
}
