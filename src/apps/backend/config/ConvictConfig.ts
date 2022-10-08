import convict from 'convict';
import { Config, ConfigProps, DatabaseConfigProps, Environment } from '@backend/config/Config';

class ConvictConfig implements Config {
  private readonly convictConfig: convict.Config<ConfigProps>;

  constructor() {
    this.convictConfig = convict({
      env: {
        doc: 'The application environment.',
        format: [Environment.PRODUCTION, Environment.DEVELOPMENT, Environment.TEST],
        default: Environment.DEVELOPMENT as Environment,
        env: 'NODE_ENV',
      },
      port: {
        doc: 'The port to bind.',
        format: 'port',
        default: 3000,
        env: 'APP_PORT',
      },
      database: {
        host: {
          doc: 'Database host.',
          format: String,
          default: '127.0.0.1',
          env: 'DATABASE_HOST',
        },
        port: {
          doc: 'Database host port.',
          format: 'port',
          default: 5432,
          env: 'DATABASE_PORT',
        },
        username: {
          doc: 'Database username.',
          format: String,
          default: 'dev-user',
          env: 'DATABASE_USER',
        },
        password: {
          doc: 'Database password.',
          format: String,
          default: 'dev-user',
          env: 'DATABASE_PASSWORD',
        },
        database: {
          doc: 'Database name.',
          format: String,
          default: 'dev-ts-app',
          env: 'DATABASE_DB',
        },
      },
    });
  }

  getEnv(): Environment {
    return this.convictConfig.get('env');
  }

  getPort(): number {
    return this.convictConfig.get('port');
  }

  getDatabaseConfig(): DatabaseConfigProps {
    return this.convictConfig.get('database');
  }

  isEnvInDevMode(): boolean {
    return this.getEnv() === Environment.DEVELOPMENT;
  }
}

export default ConvictConfig;
