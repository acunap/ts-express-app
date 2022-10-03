export interface DIContainer {
  getService: (token: DI_TYPES) => any;
}

export enum DI_TYPES {
  Config = 'Config.ConfigService',
  Logger = 'Logger.LoggerService',
  StatusGetController = 'Controllers.StatusGetController',
}
