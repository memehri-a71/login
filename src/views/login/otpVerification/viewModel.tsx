import * as yup from "yup";
import { useAuthContextValue } from "../../../context/auth/authContextValue";
import { usePhoneVerificationViewModel } from "../phoneVerification/viewModel";
import { useMutation } from "@tanstack/react-query";
import { VALIDATE_OTP } from "../../../constants/endPoints";
import { axiosPost } from "../../../configs/httpService/httpService";

export const useOtpVerificationViewModel = () => {
  const { phoneNumber } = useAuthContextValue();
  const { onSubmit } = usePhoneVerificationViewModel();

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

  const resendCode = () => {
    onSubmit({ phone: phoneNumber });
  };

  const handleSendOtp = async (body): Promise<void> => {
    await axiosPost({ url: VALIDATE_OTP, body });
  };
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (e) => handleSendOtp(e),
  });

  const onSubmithandler = async (values: any) => {
    const otpCode = Object.values(values).join("");
    const body = {
      code: otpCode,
      Phone_number: phoneNumber,
    };
    await mutateAsync(body as any);
  };

  return {
    validationSchema,
    initialValues,
    onSubmit: onSubmithandler,
    resendCode,
  };
};
