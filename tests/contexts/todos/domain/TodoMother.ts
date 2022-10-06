import { TodoIdMother } from './TodoIdMother';
import { TodoTitleMother } from './TodoTitleMother';
import { TodoDescriptionMother } from './TodoDescriptionMother';
import { TodoId } from '@todos/domain/TodoId';
import { TodoTitle } from '@todos/domain/TodoTitle';
import { TodoDescription } from '@todos/domain/TodoDescription';
import { Todo } from '@todos/domain/Todo';

export class TodoMother {
  static create(id: TodoId, title: TodoTitle, description: TodoDescription): Todo {
    return new Todo(id, title, description);
  }

  static random(): Todo {
    return this.create(TodoIdMother.random(), TodoTitleMother.random(), TodoDescriptionMother.random());
  }
}
