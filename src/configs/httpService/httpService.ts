import { QueryClient } from "@tanstack/query-core";
import axios from "axios";



export const getQueryClient = new QueryClient();

 const axiosInstance = axios.create({
  baseURL: `${process.env.BASE_URL}`,
})

export const axiosGet = async ({ url }): Promise<any> => {
  const { data } = await axiosInstance.get(url);
  const results = data?.data;
  return results;
};

export const axiosPost = async ({ url, body }): Promise<any> => {
  const res = await axiosInstance.post(url, body);
  return res.data;
};
