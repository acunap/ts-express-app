import { TodoIdMother } from './TodoIdMother';
import { TodoTitleMother } from './TodoTitleMother';
import { TodoDescriptionMother } from './TodoDescriptionMother';
import { Todo } from '@todos/domain/Todo';

describe('Todo', () => {
  it('should should receive id, title and description', () => {
    const id = TodoIdMother.random();
    const title = TodoTitleMother.random();
    const description = TodoDescriptionMother.random();

    const todo = new Todo(id, title, description);

    expect(todo.id).toBe(id);
    expect(todo.title).toBe(title);
    expect(todo.description).toBe(description);
  });

  it('should throw error if the id is not a valid uuid', () => {
    expect(() => {
      const id = TodoIdMother.create('a');
      const title = TodoTitleMother.random();
      const description = TodoDescriptionMother.random();

      const _todo = new Todo(id, title, description);
    }).toThrow(/id/i);
  });

  it('should throw error if the title is empty', () => {
    expect(() => {
      const id = TodoIdMother.random();
      const title = TodoTitleMother.create('');
      const description = TodoDescriptionMother.random();

      const _todo = new Todo(id, title, description);
    }).toThrow(/title/i);
  });

  it('should throw error if the description is empty', () => {
    expect(() => {
      const id = TodoIdMother.random();
      const title = TodoTitleMother.random();
      const description = TodoDescriptionMother.create('');

      const _todo = new Todo(id, title, description);
    }).toThrow(/description/i);
  });
});
