interface Config {
  getEnv: () => Environment;
  getPort: () => number;
  getDatabaseConfig: () => DatabaseConfigProps;
  isEnvInDevMode: () => boolean;
}

interface ConfigProps {
  env: Environment;
  port: number;
  database: DatabaseConfigProps;
}

export interface DatabaseConfigProps {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

enum Environment {
  TEST = 'test',
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}

export { Config, ConfigProps, Environment };
