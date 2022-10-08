import { AggregateRoot } from '../../shared/domain/AggregateRoot';
import { TodoId } from '@todos/domain/value-objects/TodoId';
import { TodoTitle } from '@todos/domain/value-objects/TodoTitle';
import { TodoDescription } from '@todos/domain/value-objects/TodoDescription';

export class Todo extends AggregateRoot {
  constructor(readonly id: TodoId, readonly title: TodoTitle, readonly description: TodoDescription) {
    super();
  }
}
