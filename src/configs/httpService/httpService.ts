import { QueryClient } from "@tanstack/query-core";
import axios from "axios";
import { Login } from "../../views/login";
import { showError } from "../../hook/useToust";

export const getQueryClient = new QueryClient();

// export const axiosInstance = axios.create({
//   baseURL: "https://stage-api.sanaap.co",
// });

// axiosInstance.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   (error) => {
//     console.log(error);

//     return Promise.reject(new Error("req interceptor error", error));
//   }
// );

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error: any) => {
//     console.log(error);
//     showError(error);
//     error.config.headers.Accept = "application/json";

//     return Promise.reject(error);
//   }
// );

export const axiosGet = async ({ url }): Promise<any> => {
  const { data } = await axios.get(url);
  return data;
};

export const axiosPost = async ({ url, body }): Promise<any> => {
  const res = await axios.post(url, body, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return res;
};
