/* PROCESS */

export interface IProcessEnv {
  [key: string]: string | undefined;
}

/* CONFIG */

interface IServer {
  host: string;
  port: number;
  hasPort: boolean;
}

export interface IBaseConfig {
  nodeEnv: string;
  isDev: boolean;
  isTest: boolean;
  isStage: boolean;
  isProd: boolean;
}

export interface IEnvConfig {
  server: IServer;
}

export interface IConfig extends IBaseConfig, IEnvConfig {}
