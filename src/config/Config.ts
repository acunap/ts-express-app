interface Config {
  getEnv(): Environment;
  getPort(): number;
  isEnvInDevMode(): boolean;
}

interface ConfigProps {
  env: Environment;
  port: number;
}

enum Environment {
  TEST = 'test',
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}

export { Config, ConfigProps, Environment };
