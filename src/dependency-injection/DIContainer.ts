export interface DIContainer {
  getService(token: string): any;
}

export enum DI_TYPES {
  Config = 'Config.ConfigService',
  StatusGetController = 'Controllers.StatusGetController',
}
