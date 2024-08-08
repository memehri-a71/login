import type { BodyOtp, InitialValuesOtp, UseOtpVerification } from "../imports";
import {
  axiosPost,
  CREATE_OTP,
  useAuthContext,
  useMutation,
  VALIDATE_OTP,
  yup,
} from "../imports";



export const useOtpVerificationViewModel = ():UseOtpVerification => {
  const { setCurStep, phoneNumber } = useAuthContext();

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

  const handleCreateOtp = async (body: BodyOtp): Promise<void> => {
    await axiosPost({
      url: CREATE_OTP,
      body,
    });
  };
  const { mutateAsync: mutateAsyncOtp } = useMutation({
    mutationFn: (e:any) => handleCreateOtp(e),
  });
  const resendCode = async () => {
    const body = {
      phone_number: phoneNumber,
    };
    await mutateAsyncOtp(body as any);
  };

  const handleSendOtp = async (body: BodyOtp): Promise<void> => {
    await axiosPost({ url: VALIDATE_OTP, body });
  };
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (e:any) => handleSendOtp(e),
  });
  const onSubmithandler = async (
    values: InitialValuesOtp,
    formikProps: { resetForm: () => void }
  ) => {
    const otpCode = Object.values(values).join("");
    const body = {
      code: otpCode,
      phone_number: phoneNumber,
    };

    await mutateAsync(body as any)
      .then(() => setCurStep("userInfo"))
      .catch(() => {
        formikProps.resetForm();
      });
  };

  return {
    validationSchema,
    initialValues,
    onSubmit: onSubmithandler,
    resendCode,
    isPending,
  };
};
