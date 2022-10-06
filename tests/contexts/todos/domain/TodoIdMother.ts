import { UuidMother } from '../../shared/domain/UuidMother';
import { TodoId } from '@todos/domain/TodoId';

export class TodoIdMother {
  static create(value: string): TodoId {
    return new TodoId(value);
  }

  static random(): TodoId {
    return this.create(UuidMother.random());
  }
}
