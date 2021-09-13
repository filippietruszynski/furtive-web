import { IEnvConfig } from "./types";

const stageConfig: IEnvConfig = {
  server: {
    host: process.env.STAGE_SERVER_HOST || "",
    port: process.env.STAGE_SERVER_PORT || "",
    hasPort: Boolean(process.env.STAGE_SERVER_PORT),
  },
};

export default stageConfig;
