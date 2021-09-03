interface IApp {
  host: string;
  port: number;
}

interface IServer {
  host: string;
  port: number;
}

export interface IBaseConfig {
  env: string;
  isDev: boolean;
  isTest: boolean;
  isProd: boolean;
}

export interface IEnvConfig {
  app: IApp;
  server: IServer;
}

export interface IConfig extends IBaseConfig, IEnvConfig {}
