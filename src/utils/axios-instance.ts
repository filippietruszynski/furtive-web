import axios from "axios";

import config from "../config";

const axiosInstance = axios.create({
  baseURL: `http://${config.server.host}:${config.server.port}/`,
});

export default axiosInstance;
