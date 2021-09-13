import { IEnvConfig } from "./types";

const prodConfig: IEnvConfig = {
  server: {
    host: process.env.PROD_SERVER_HOST,
    port: parseInt(<string>process.env.PROD_SERVER_PORT, 10) || undefined,
    hasPort: Boolean(process.env.PROD_SERVER_PORT),
  },
};

export default prodConfig;
