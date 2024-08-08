import * as yup from "yup";

export const useOtpVerificationViewModel = () => {
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

  const onSubmit = (values: any) => {
    console.log(values);
  };

  const resendCode = () => {
    console.log("resendCode");
  };
  return {
    validationSchema,
    initialValues,
    onSubmit,
    resendCode,
  };
};
