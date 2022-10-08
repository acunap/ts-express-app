import { DataSource, EntitySchema, Repository } from 'typeorm';
import { AggregateRoot } from '../../domain/AggregateRoot';
import { TypeOrmDataSourceFactory } from './TypeOrmDataSourceFactory';
import { Config } from '@backend/config/Config';

export abstract class TypeOrmRepository<T extends AggregateRoot> {
  protected readonly dataSource: DataSource;

  protected constructor(protected readonly config: Config) {
    this.dataSource = TypeOrmDataSourceFactory.createDataSource(config);
  }

  protected abstract entitySchema(): EntitySchema<T>;

  async getRepository(): Promise<Repository<T>> {
    if (!this.dataSource.isInitialized) {
      await this.dataSource.initialize();
    }

    return this.dataSource.getRepository(this.entitySchema());
  }
}
