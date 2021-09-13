import { IEnvConfig } from "./types";

const prodConfig: IEnvConfig = {
  server: {
    host: process.env.PROD_SERVER_HOST || "",
    port: process.env.PROD_SERVER_PORT || "",
    hasPort: Boolean(process.env.PROD_SERVER_PORT),
  },
};

export default prodConfig;
