import { IEnvConfig } from "./types";

const testConfig: IEnvConfig = {
  server: {
    host: process.env.TEST_SERVER_HOST || "",
    port: process.env.TEST_SERVER_PORT || "",
    hasPort: Boolean(process.env.TEST_SERVER_PORT),
  },
};

export default testConfig;
