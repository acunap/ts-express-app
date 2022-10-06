import { StringMother } from '../../shared/domain/StringMother';
import { TodoDescription } from '@todos/domain/TodoDescription';

export class TodoDescriptionMother {
  static create(value: string): TodoDescription {
    return new TodoDescription(value);
  }

  static random(numberOfWords = 1): TodoDescription {
    return this.create(StringMother.random(numberOfWords));
  }
}
