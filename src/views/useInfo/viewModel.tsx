import { useAuthContextValue } from "../../context/authContextValue";
import * as yup from "yup";

export const useUserInfoViewModel = () => {
  const { setCurStep } = useAuthContextValue();

  const initialValues = { firstName: "", lastName: "" };

  const validationSchema = yup.object({
    firstName: yup.string().required("این فیلد الزامی است."),
    lastName: yup.string().required("این فیلد الزامی است."),
  });

  const onSubmit = async (values: any) => {
    setCurStep('agentInfo');
  };
  return { initialValues, validationSchema, onSubmit };
};
