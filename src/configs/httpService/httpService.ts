import { axiosInstance } from "./interceptor";

export const axiosGet = async ({ url }): Promise<any> => {
  const fullUrl = "https://stage-api.sanaap.co" + url;
  const res = await axiosInstance.get(fullUrl);
  return res.data;
};

export const axiosPost = async ({ url, body }) => {
  const fullUrl = "https://stage-api.sanaap.co" + url;

  const res = await axiosInstance.post(fullUrl, body, {
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
  });

  return res.data;
};
