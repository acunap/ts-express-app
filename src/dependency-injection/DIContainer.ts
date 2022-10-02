export interface DIContainer {
  boot(): void;
  getService(token: string): any;
}
