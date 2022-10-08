import { EntitySchema } from 'typeorm';
import { ValueObjectTransformer } from '../../../shared/infrastructure/typeorm/ValueObjectTransformer';
import { Todo } from '@todos/domain/Todo';
import { TodoId } from '@value-objects/TodoId';
import { TodoTitle } from '@value-objects/TodoTitle';
import { TodoDescription } from '@value-objects/TodoDescription';

export const TodoEntity = new EntitySchema<Todo>({
  name: 'todos',
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      transformer: ValueObjectTransformer(TodoId),
    },
    title: {
      type: 'text',
      nullable: false,
      transformer: ValueObjectTransformer(TodoTitle),
    },
    description: {
      type: 'text',
      nullable: false,
      transformer: ValueObjectTransformer(TodoDescription),
    },
  },
});
