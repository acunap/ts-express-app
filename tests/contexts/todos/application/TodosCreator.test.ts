import { MockTodoRepository } from '../__mocks__/MockTodoRepository';
import { TodoMother } from '../domain/TodoMother';
import { TodosCreator } from '@todos/application/TodosCreator';

describe('TodoCreator', () => {
  it('should use repository to save the new Todo', () => {
    const repository = new MockTodoRepository();
    const creator = new TodosCreator(repository);
    const todo = TodoMother.random();

    creator.create(todo.id.value, todo.title.value, todo.description.value);

    repository.assertHasBeenCalledWith(todo);
  });
});
