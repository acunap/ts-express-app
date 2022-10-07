import { TodoMother } from '../domain/TodoMother';
import { TodoRepository } from '@todos/domain/TodoRepository';
import { container } from '@tests/shared/TestDIContainer';
import { DI_TYPES } from '@backend/dependency-injection/DIContainer';
import { Todo } from '@todos/domain/Todo';

describe('TodoRepository', () => {
  it('should save a todo', () => {
    const repository: TodoRepository = container.getService(DI_TYPES.TodoRepository);
    const todo = TodoMother.create();

    repository.save(todo);

    const persistedTodos = repository.searchAll();

    expect(persistedTodos).toHaveLength(1);
    expect(persistedTodos).toEqual([todo]);
  });

  it('should return all todos persisted', () => {
    const repository: TodoRepository = container.getService(DI_TYPES.TodoRepository);
    const todos = [TodoMother.create(), TodoMother.create(), TodoMother.create()];

    todos.forEach((todo) => repository.save(todo));

    const persistedCourses = repository.searchAll();

    expect(persistedCourses).toHaveLength(todos.length);
    expect(persistedCourses.sort(sort)).toEqual(todos.sort(sort));
  });
});

function sort(todo1: Todo, todo2: Todo): number {
  return todo1?.id?.value.localeCompare(todo2?.id?.value);
}
