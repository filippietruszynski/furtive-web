import { IEnvConfig } from "./types";

const devConfig: IEnvConfig = {
  server: {
    host: process.env.DEV_SERVER_HOST || "NOT FOUND",
    port:
      (process.env.DEV_SERVER_PORT &&
        parseInt(process.env.DEV_SERVER_PORT, 10)) ||
      404,
    hasPort: Boolean(process.env.DEV_SERVER_PORT),
  },
};

const testConfig: IEnvConfig = {
  server: {
    host: process.env.TEST_SERVER_HOST || "NOT FOUND",
    port:
      (process.env.TEST_SERVER_PORT &&
        parseInt(process.env.TEST_SERVER_PORT, 10)) ||
      404,
    hasPort: Boolean(process.env.TEST_SERVER_PORT),
  },
};

const stageConfig: IEnvConfig = {
  server: {
    host: process.env.STAGE_SERVER_HOST || "NOT FOUND",
    port:
      (process.env.STAGE_SERVER_PORT &&
        parseInt(process.env.STAGE_SERVER_PORT, 10)) ||
      404,
    hasPort: Boolean(process.env.STAGE_SERVER_PORT),
  },
};

const prodConfig: IEnvConfig = {
  server: {
    host: process.env.PROD_SERVER_HOST || "NOT FOUND",
    port:
      (process.env.PROD_SERVER_PORT &&
        parseInt(process.env.PROD_SERVER_PORT, 10)) ||
      404,
    hasPort: Boolean(process.env.PROD_SERVER_PORT),
  },
};

export default { devConfig, testConfig, stageConfig, prodConfig };
