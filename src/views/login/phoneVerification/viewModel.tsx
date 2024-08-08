import { useMutation } from "@tanstack/react-query";
import * as yup from "yup";
import { axiosPost } from "../../../configs/httpService/httpService";
import { CREATE_OTP } from "../../../constants/endPoints";
import { useAuthContext } from "../../../context/auth/useAuthContext";

export const usePhoneVerificationViewModel = () => {
  const {setCurStep, setPhoneNumber } = useAuthContext();
  const initialValues = { phone: "" };
  const validationSchema = yup.object({
    phone: yup.string().required("این فیلد الزامی است."),
  });

  const handleCreateOtp = async (body): Promise<void> => {
    await axiosPost({
      url: CREATE_OTP,
      body,
    });
  };
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (e) => handleCreateOtp(e),
  });

  const onSubmit = async (values: any) => {
    const body = {
      phone_number: values?.phone,
    };
    await mutateAsync(body as any).then(() => {
      setCurStep("otp");
      setPhoneNumber(values?.phone);
    });
  };
  return { initialValues, validationSchema, onSubmit, isPending };
};
