import { IEnvConfig } from "./types";

const stageConfig: IEnvConfig = {
  server: {
    host: process.env.STAGE_SERVER_HOST,
    port: parseInt(<string>process.env.STAGE_SERVER_PORT, 10) || undefined,
    hasPort: Boolean(process.env.STAGE_SERVER_PORT),
  },
};

export default stageConfig;
