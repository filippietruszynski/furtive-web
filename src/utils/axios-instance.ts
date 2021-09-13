import axios from "axios";

import config from "../config";

const colon: string = config.server.hasPort ? ":" : "";

const axiosInstance = axios.create({
  baseURL: `https://${config.server.host}${colon}${config.server.port}/`,
});

export default axiosInstance;
