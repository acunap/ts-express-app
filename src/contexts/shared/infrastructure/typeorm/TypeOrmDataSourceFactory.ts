import path from 'path';
import { DataSource, LoggerOptions } from 'typeorm';
import { Config, Environment } from '@backend/config/Config';

export class TypeOrmDataSourceFactory {
  static createDataSource(config: Config): DataSource {
    const databaseConfig = config.getDatabaseConfig();

    return new DataSource({
      type: 'postgres',
      host: databaseConfig.host,
      port: databaseConfig.port,
      username: databaseConfig.username,
      password: databaseConfig.password,
      database: databaseConfig.database,
      entities: [path.join(__dirname, '../../../**/**/persistence/*Entity.ts')],
      migrations: [path.join(__dirname, '/migrations/*.ts')],
      logging: this.getLoggingOptions(config),
    });
  }

  private static getLoggingOptions(config: Config): LoggerOptions {
    switch (config.getEnv()) {
      case Environment.PRODUCTION:
        return ['error'];
      case Environment.DEVELOPMENT:
        return ['migration', 'query', 'log'];
      default:
        return false;
    }
  }
}
