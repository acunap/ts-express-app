import { Todo } from '@todos/domain/Todo';

export interface TodoRepository {
  save: (todo: Todo) => Promise<void>;
  searchAll: () => Promise<Todo[]>;
}
