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
      console.log(error);
  
      return Promise.reject(new Error("req interceptor error", error));
    }
  );
  
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error: any) => {
      console.log(error);
      showError(error);
      error.config.headers.Accept = "application/json";
  
      return Promise.reject(error);
    }
  );