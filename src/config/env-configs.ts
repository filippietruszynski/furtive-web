import { IEnvConfig, IProcessEnv } from "./types";

const devConfig = (env: IProcessEnv): IEnvConfig => {
  return {
    server: {
      host: env.DEV_SERVER_HOST || "NOT FOUND",
      port: (env.DEV_SERVER_PORT && parseInt(env.DEV_SERVER_PORT, 10)) || 404,
      hasPort: Boolean(process.env.DEV_SERVER_PORT),
    },
  };
};

const testConfig = (env: IProcessEnv): IEnvConfig => {
  return {
    server: {
      host: env.TEST_SERVER_HOST || "NOT FOUND",
      port: (env.TEST_SERVER_PORT && parseInt(env.TEST_SERVER_PORT, 10)) || 404,
      hasPort: Boolean(process.env.TEST_SERVER_PORT),
    },
  };
};

const stageConfig = (env: IProcessEnv): IEnvConfig => {
  return {
    server: {
      host: env.STAGE_SERVER_HOST || "NOT FOUND",
      port:
        (env.STAGE_SERVER_PORT && parseInt(env.STAGE_SERVER_PORT, 10)) || 404,
      hasPort: Boolean(process.env.STAGE_SERVER_PORT),
    },
  };
};

const prodConfig = (env: IProcessEnv): IEnvConfig => {
  return {
    server: {
      host: env.PROD_SERVER_HOST || "NOT FOUND",
      port: (env.PROD_SERVER_PORT && parseInt(env.PROD_SERVER_PORT, 10)) || 404,
      hasPort: Boolean(process.env.PROD_SERVER_PORT),
    },
  };
};

export default { devConfig, testConfig, stageConfig, prodConfig };
