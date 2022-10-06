import { Todo } from '@todos/domain/Todo';

export interface TodoRepository {
  save: (todo: Todo) => void;
  searchAll: () => Todo[];
}
