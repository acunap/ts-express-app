import { EntitySchema } from 'typeorm';
import { TypeOrmRepository } from '../../../shared/infrastructure/typeorm/TypeOrmRepository';
import { TodoRepository } from '@todos/domain/TodoRepository';
import { Todo } from '@todos/domain/Todo';
import { TodoEntity } from '@todos/infrastructure/persistence/TodoEntity';

export class TypeOrmTodoRepository extends TypeOrmRepository<Todo> implements TodoRepository {
  entitySchema(): EntitySchema<Todo> {
    return TodoEntity;
  }

  async save(todo: Todo): Promise<void> {
    const repository = await this.getRepository();
    await repository.save(todo);
  }

  async searchAll(): Promise<Todo[]> {
    const repository = await this.getRepository();
    return await repository.find();
  }
}
