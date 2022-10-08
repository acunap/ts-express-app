import { TodoIdMother } from './TodoIdMother';
import { TodoTitleMother } from './TodoTitleMother';
import { TodoDescriptionMother } from './TodoDescriptionMother';
import { Todo } from '@todos/domain/Todo';

export class TodoMother {
  static create({
    id = TodoIdMother.create().value,
    title = TodoTitleMother.create().value,
    description = TodoDescriptionMother.create().value,
  }: { id?: string; title?: string; description?: string } = {}): Todo {
    return new Todo(TodoIdMother.create(id), TodoTitleMother.create(title), TodoDescriptionMother.create(description));
  }
}
