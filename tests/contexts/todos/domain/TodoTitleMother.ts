import { StringMother } from '../../shared/domain/StringMother';
import { TodoTitle } from '@todos/domain/TodoTitle';

export class TodoTitleMother {
  static create(value: string): TodoTitle {
    return new TodoTitle(value);
  }

  static random(numberOfWords = 1): TodoTitle {
    return this.create(StringMother.random(numberOfWords));
  }
}
