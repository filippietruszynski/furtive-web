import { IEnvConfig } from "./types";

const devConfig: IEnvConfig = {
  app: {
    host: process.env.PROD_APP_HOST || "localhost",
    port: parseInt(<string>process.env.PROD_APP_PORT, 10) || 3000,
  },
  server: {
    host: process.env.PROD_SERVER_HOST || "localhost",
    port: parseInt(<string>process.env.PROD_SERVER_PORT, 10) || 5000,
  },
};

export default devConfig;
