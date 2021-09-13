interface IServer {
  host?: string;
  port?: number;
  hasPort: boolean;
}

export interface IBaseConfig {
  env: string;
  isDev: boolean;
  isTest: boolean;
  isStage: boolean;
  isProd: boolean;
}

export interface IEnvConfig {
  server: IServer;
}

export interface IConfig extends IBaseConfig, IEnvConfig {}
