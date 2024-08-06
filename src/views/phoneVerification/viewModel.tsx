import { useMutation } from "@tanstack/react-query";
import * as yup from "yup";
import { axiosPost } from "../../configs/httpService/httpService";
import { CREATE_OTP } from "../../constants/endPoints";
import { useAuthContextValue } from "../../context/authContextValue";

export const usePhoneVerificationViewModel = () => {
  const {curStep, setCurStep } = useAuthContextValue();
  const initialValues = { phone: "" };
  const validationSchema = yup.object({
    phone: yup.string().required("این فیلد الزامی است."),
  });

  const handleCreateOtp = async (body): Promise<void> => {
    await axiosPost({ url: CREATE_OTP, body });
  };
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (e) => handleCreateOtp(e),
  });

  const onSubmit = async (values: any) => {
    console.log("values", values);
    const body = {
      phone_number: values?.phone,
    };
    await mutateAsync(body as any)
      .then(() => console.log(curStep))
      .catch(() => setCurStep("otp"));
  };
  return { initialValues, validationSchema, onSubmit, isPending };
};
