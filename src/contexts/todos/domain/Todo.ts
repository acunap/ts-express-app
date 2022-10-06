import { TodoId } from '@todos/domain/TodoId';
import { TodoTitle } from '@todos/domain/TodoTitle';
import { TodoDescription } from '@todos/domain/TodoDescription';

export class Todo {
  constructor(readonly id: TodoId, readonly title: TodoTitle, readonly description: TodoDescription) {}
}
