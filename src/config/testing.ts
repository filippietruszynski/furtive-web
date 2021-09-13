import { IEnvConfig } from "./types";

const testConfig: IEnvConfig = {
  server: {
    host: process.env.TEST_SERVER_HOST,
    port: parseInt(<string>process.env.DEV_SERVER_PORT, 10) || undefined,
    hasPort: Boolean(process.env.TEST_SERVER_PORT),
  },
};

export default testConfig;
