import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { CREATE_OTP, VALIDATE_OTP } from "../../../constants/endPoints";
import { axiosPost } from "../../../configs/httpService/httpService";
import { useAuthContext } from "../../../context/auth/useAuthContext";

export const useOtpVerificationViewModel = () => {
  const {setCurStep, phoneNumber } = useAuthContext();

  const validationSchema = yup.object({
    name0: yup.number().required(),
    name1: yup.number().required(),
    name2: yup.number().required(),
    name3: yup.number().required(),
    name4: yup.number().required(),
  });

  const initialValues = {
    name0: "",
    name1: "",
    name2: "",
    name3: "",
    name4: "",
  };

  const handleCreateOtp = async (body): Promise<void> => {
    await axiosPost({
      url: CREATE_OTP,
      body,
    });
  };
  const { mutateAsync: mutateAsyncOtp } = useMutation({
    mutationFn: (e) => handleCreateOtp(e),
  });
  const resendCode = async () => {
    const body = {
      phone_number: phoneNumber,
    };
    await mutateAsyncOtp(body as any);
  };

  const handleSendOtp = async (body): Promise<void> => {
    await axiosPost({ url: VALIDATE_OTP, body });
  };
  const { mutateAsync,isPending } = useMutation({
    mutationFn: (e) => handleSendOtp(e),
  });
  const onSubmithandler = async (values: any) => {
    const otpCode = Object.values(values).join("");
    const body = {
      code: otpCode,
      phone_number: phoneNumber,
    };

    await mutateAsync(body as any).then(() => setCurStep("userInfo"));
  };

  return {
    validationSchema,
    initialValues,
    onSubmit: onSubmithandler,
    resendCode,isPending
  };
};
