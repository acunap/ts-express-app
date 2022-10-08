import { MockTodoRepository } from '../__mocks__/MockTodoRepository';
import { TodoMother } from '../domain/TodoMother';
import { TodosCreator } from '@todos/application/TodosCreator';

describe('TodoCreator', () => {
  it('should use repository to save the new Todo', async () => {
    const repository = new MockTodoRepository();
    const creator = new TodosCreator(repository);
    const todo = TodoMother.create();

    await creator.create(todo);

    repository.assertHasBeenCalledWith(todo);
  });
});
