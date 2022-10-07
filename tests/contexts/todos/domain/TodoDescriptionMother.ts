import { StringMother } from '../../shared/domain/StringMother';
import { TodoDescription } from '@todos/domain/TodoDescription';

export class TodoDescriptionMother {
  static create(value = StringMother.random()): TodoDescription {
    return new TodoDescription(value);
  }
}
