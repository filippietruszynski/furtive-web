import envConfigs from "./env-configs";

import { IBaseConfig, IConfig, IEnvConfig, IProcessEnv } from "./types";

const processEnv: IProcessEnv = process.env;
const nodeEnv: string = processEnv.NODE_ENV || "development";

const baseConfig: IBaseConfig = {
  nodeEnv,
  isDev: nodeEnv === "development",
  isTest: nodeEnv === "testing",
  isStage: nodeEnv === "staging",
  isProd: nodeEnv === "production",
};

let envConfig: IEnvConfig;

switch (nodeEnv) {
  case "development":
    envConfig = envConfigs.devConfig;
    break;
  case "testing":
    envConfig = envConfigs.testConfig;
    break;
  case "staging":
    envConfig = envConfigs.stageConfig;
    break;
  case "production":
    envConfig = envConfigs.prodConfig;
    break;
  default:
    envConfig = envConfigs.devConfig;
}

const config: IConfig = { ...baseConfig, ...envConfig };

export default config;
