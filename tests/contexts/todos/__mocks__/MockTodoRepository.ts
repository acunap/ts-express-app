import { TodoRepository } from '@todos/domain/TodoRepository';
import { Todo } from '@todos/domain/Todo';

export class MockTodoRepository implements TodoRepository {
  private readonly saveMock = jest.fn();
  private readonly searchAllMock = jest.fn();

  async save(todo: Todo): Promise<void> {
    this.saveMock(todo);
  }

  async searchAll(): Promise<Todo[]> {
    return this.searchAllMock();
  }

  assertHasBeenCalledWith(todo: Todo): void {
    expect(this.saveMock).toHaveBeenCalledWith(todo);
  }
}
