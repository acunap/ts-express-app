import { TodoMother } from '@tests/contexts/todos/domain/TodoMother';

describe('Todo', () => {
  it('should throw error if the id is not a valid uuid', () => {
    expect(() => {
      const _todo = TodoMother.create({ id: '' });
    }).toThrow(/id/i);
  });

  it('should throw error if the title is empty', () => {
    expect(() => {
      const _todo = TodoMother.create({ title: '' });
    }).toThrow(/title/i);
  });

  it('should throw error if the description is empty', () => {
    expect(() => {
      const _todo = TodoMother.create({ description: '' });
    }).toThrow(/description/i);
  });
});
