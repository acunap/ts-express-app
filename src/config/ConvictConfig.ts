import convict from 'convict';
import { Config, ConfigProps, Environment } from './Config';

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
    });
  }

  getEnv(): Environment {
    return this.convictConfig.get('env');
  }

  getPort(): number {
    return this.convictConfig.get('port');
  }

  isEnvInDevMode(): boolean {
    return this.getEnv() === Environment.DEVELOPMENT;
  }
}

export default ConvictConfig;
