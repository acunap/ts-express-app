export interface DIContainer {
  getService: (token: DI_TYPES) => any;
}

export enum DI_TYPES {
  Server = 'App.Server',
  Config = 'Config.ConfigService',
  Logger = 'Logger.LoggerService',
  StatusRoute = 'Routes.StatusRoute',
  StatusGetRoute = 'Routes.StatusGetRoute',
  StatusGetController = 'Controllers.StatusGetController',
}
