import { useAuthContext, yup } from "../imports";

export const useUserInfoViewModel = () => {
  const { setUser, setCurStep } = useAuthContext();

  const initialValues = { firstName: "", lastName: "" };

  const validationSchema = yup.object({
    firstName: yup.string().required("این فیلد الزامی است."),
    lastName: yup.string().required("این فیلد الزامی است."),
  });

  const onSubmit = async (values: any) => {
    setCurStep("agentInfo");
    setUser({
      firsName: values?.firstName,
      lastName: values?.lastName,
    });
  };
  return { initialValues, validationSchema, onSubmit };
};
