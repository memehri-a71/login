import { useAuthContextValue } from "../../context/authContextValue";
import * as yup from "yup";
import { axiosPost } from "../../configs/httpService/httpService";
import {  VALIDATE_OTP } from "../../constants/endPoints";
import { useMutation } from "@tanstack/react-query";

export const useAgentInfoViewModel = () => {
  const { curStep, setCurStep } = useAuthContextValue();
  const initialValues = {
    address: "",
    agencyType: "",
    agencyCode: "",
    insuranceBranch: "",
    phone: "",
    cityCode: "",
    province: "",
    city: "",
  };
  const validationSchema = yup.object({
    address: yup.string().required("این فیلد الزامی است."),
    agencyType: yup.string().required("این فیلد الزامی است."),
    agencyCode: yup.string().required("این فیلد الزامی است."),
    insuranceBranch: yup.string().required("این فیلد الزامی است."),
    phone: yup.string().required("این فیلد الزامی است."),
    cityCode: yup.string().required("این فیلد الزامی است."),
    province: yup.string().required("این فیلد الزامی است."),
    city: yup.string().required("این فیلد الزامی است."),
  });

  const handleCreateOtp = async (body): Promise<void> => {
    await axiosPost({ url: VALIDATE_OTP, body });
  };
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (e) => handleCreateOtp(e),
  });

  const onSubmit = async (values: any) => {
    console.log("values", values, curStep);
    const body = {
      phone_number: values?.phone,
    };
    await setCurStep("userInfo");
    await mutateAsync(body as any);
  };
  return { initialValues, validationSchema, onSubmit, isPending };
};
