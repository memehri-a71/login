import { QueryClient } from "@tanstack/query-core";
import axios from "axios";

export const getQueryClient = new QueryClient();

//  const axiosInstance = axios.create({
//   baseURL: `${process.env.BASE_URL}`,
// })

export const axiosGet = async ({ url }): Promise<any> => {
  const { data } = await axios.get(url);
  return data;
};

export const axiosPost = async ({ url, body }): Promise<any> => {
  const res = await axios.post(
    url,
    body
    //    {
    //   headers: {
    //    'Content-Type': 'application/json',

    //       'Access-Control-Allow-Methods': 'OPTIONS,POST',
    //       'Access-Control-Allow-Credentials': true,
    //       'Access-Control-Allow-Origin': '*',
    //       'X-Requested-With': '*',
    //   },
    // }
  );
  return res.data;
};
