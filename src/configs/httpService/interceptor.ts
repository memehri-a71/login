import axios from "axios";
import { showError } from "../../hook/useToust";

export const axiosInstance = axios.create({
  baseURL: "https://stage-api.sanaap.co",
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(new Error(error));
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: any) => {
    if (error?.response?.status == 400) {
      showError(error?.response?.data?.error_details?.fa_details)
    }
    else { showError(error.message); }
    error.config.headers.Accept = "application/json";
    return Promise.reject(error);
  }
);
