import { TodoRepository } from '@todos/domain/TodoRepository';
import { Todo } from '@todos/domain/Todo';

export class MockTodoRepository implements TodoRepository {
  private readonly saveMock = jest.fn();
  private readonly searchAllMock = jest.fn();

  save(todo: Todo): void {
    this.saveMock(todo);
  }

  searchAll(): Todo[] {
    return this.searchAllMock();
  }

  assertHasBeenCalledWith(todo: Todo): void {
    expect(this.saveMock).toHaveBeenCalledWith(todo);
  }
}
