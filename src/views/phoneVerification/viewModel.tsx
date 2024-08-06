import * as yup from "yup";

export const usePhoneVerificationViewModel = () => {
  const initialValues = { phone: "" };
  const validationSchema = yup.object({
    phone: yup.string().required("این فیلد الزامی است."),
  });
  const onSubmit = (values: any) => {
    console.log('values',values);
  };
  return { initialValues, validationSchema, onSubmit };
};
