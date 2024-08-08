import { useMutation } from "@tanstack/react-query";
import * as yup from "yup";
import { axiosPost } from "../../../configs/httpService/httpService";
import { CREATE_OTP } from "../../../constants/endPoints";
import { useAuthContextValue } from "../../../context/authContextValue";

export const usePhoneVerificationViewModel = () => {
  const { setCurStep, setPhoneNumber } = useAuthContextValue();
  const initialValues = { phone: "" };
  const validationSchema = yup.object({
    phone: yup.string().required("این فیلد الزامی است."),
  });

  const handleCreateOtp = async (body): Promise<void> => {
    await axiosPost({
      url: "https://stage-api.sanaap.co/api/v2/app/DEY/agent/verification/signup/create_otp/",
      body,
    });
  };
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (e) => handleCreateOtp(e),
  });

  const onSubmit = async (values: any) => {
    console.log("values", values);
    setPhoneNumber(values?.phone);
    const body = {
      {phone_number: values?.phone,}
    };
    setCurStep("userInfo");
    await mutateAsync(body as any);
    // fetch(
    //   "https://stage-api.sanaap.co/api/v2/app/DEY/agent/verification/signup/create_otp/",
    //   {
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //     method: "POST",
    //     body: {
    //       phone_number: values?.phone,
    //     },
    //   }
    // )
    //   .then((res) => JSON.parse(res))
    //   .then((res) => console.log(res));
  };
  return { initialValues, validationSchema, onSubmit, isPending };
};
