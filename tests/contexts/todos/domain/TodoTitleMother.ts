import { StringMother } from '../../shared/domain/StringMother';
import { TodoTitle } from '@todos/domain/value-objects/TodoTitle';

export class TodoTitleMother {
  static create(value = StringMother.random()): TodoTitle {
    return new TodoTitle(value);
  }
}
