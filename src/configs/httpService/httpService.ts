import { showError } from "../../hook/useToust";
import { axiosInstance } from "./interceptor";

export const axiosGet = async ({ url }): Promise<any> => {
  try {
    const fullUrl = "https://stage-api.sanaap.co" + url;
    const res = await axiosInstance.get(fullUrl);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const axiosPost = async ({ url, body }) => {
  try {
    const fullUrl = "https://stage-api.sanaap.co" + url;

    const res = await axiosInstance.post(fullUrl, body, {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
    });

    return res.data;
  } catch (error) {
    const newError = error?.response?.data;
    if (newError?.status_code == 400) {
      showError(newError?.error_details?.fa_details);
    }
  }
};
