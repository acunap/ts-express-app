import { UuidMother } from '../../shared/domain/UuidMother';
import { TodoId } from '@todos/domain/value-objects/TodoId';

export class TodoIdMother {
  static create(value = UuidMother.random()): TodoId {
    return new TodoId(value);
  }
}
