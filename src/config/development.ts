import { IEnvConfig } from "./types";

const devConfig: IEnvConfig = {
  server: {
    host: process.env.DEV_SERVER_HOST || "localhost",
    port: parseInt(<string>process.env.DEV_SERVER_PORT, 10) || 5000,
    hasPort: Boolean(process.env.DEV_SERVER_PORT),
  },
};

export default devConfig;
