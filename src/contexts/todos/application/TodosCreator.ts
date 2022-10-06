import { Todo } from '@todos/domain/Todo';
import { TodoId } from '@todos/domain/TodoId';
import { TodoTitle } from '@todos/domain/TodoTitle';
import { TodoDescription } from '@todos/domain/TodoDescription';
import { TodoRepository } from '@todos/domain/TodoRepository';

export class TodosCreator {
  constructor(private readonly repository: TodoRepository) {}

  create(id: string, title: string, description: string): void {
    const todo = new Todo(new TodoId(id), new TodoTitle(title), new TodoDescription(description));

    this.repository.save(todo);
  }
}
