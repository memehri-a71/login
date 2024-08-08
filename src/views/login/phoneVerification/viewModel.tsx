import {
  axiosPost,
  CREATE_OTP,
  PHONE_REGEX,
  useAuthContext,
  useMutation,
  yup,
} from "../imports";
import type {
  InitialValuesPhoneVerification,
  UsePhoneVerificationType,
} from "../imports";

export const usePhoneVerificationViewModel = (): UsePhoneVerificationType => {
  const { setCurStep, setPhoneNumber } = useAuthContext();
  const initialValues = { phone: "" };
  const validationSchema = yup.object({
    phone: yup
      .string()
      .matches(PHONE_REGEX, "شماره موبایل صحیح نمی باشد.")
      .required("این فیلد الزامی است."),
  });

  const handleCreateOtp = async (body: {
    phone_number: string;
  }): Promise<void> => {
    await axiosPost({
      url: CREATE_OTP,
      body,
    });
  };
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (e: any) => handleCreateOtp(e),
  });

  const onSubmit = async (values: InitialValuesPhoneVerification) => {
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
