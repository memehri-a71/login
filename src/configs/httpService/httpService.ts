import { QueryClient } from "@tanstack/query-core";
import axios from "axios";
import { Login } from "../../views/login";

export const getQueryClient = new QueryClient();

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

    error.config.headers.Accept = "application/json";

    return Promise.reject(error);
  }
);
export const axiosGet = async ({ url }): Promise<any> => {
  const { data } = await axiosInstance.get(url);
  return data;
};

export const axiosPost = async ({ url, body }): Promise<any> => {
  const res = await axiosInstance.post(url, body, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "OPTIONS,POST",
      "Access-Control-Allow-Credentials": 'true',
      "Access-Control-Allow-Origin": "*",
      "X-Requested-With": "*",
    },
  });
  return res.data;
};
