import { useAuthContextValue } from "../../context/authContextValue";
import * as yup from "yup";
import { axiosPost } from "../../configs/httpService/httpService";
import { CHECK_AGENCY_CODE, VALIDATE_OTP } from "../../constants/endPoints";
import { useMutation } from "@tanstack/react-query";
import { useDebounce } from "../../hook/useDebounce";

export const useAgentInfoViewModel = () => {
  const { curStep, setCurStep } = useAuthContextValue();
  const initialValues = {
    address: "",
    province: "",
    agencyCode: "",
    insuranceBranch: "",
    phone: "",
    cityCode: "",
    city: "",
    agencyType: "legal",
    agencyName: "",
  };
  const validationSchema = yup.object({
    agencyCode: yup.number().required("این فیلد الزامی است."),
    address: yup.string().required("این فیلد الزامی است."),
    province: yup.string().required("این فیلد الزامی است."),
    insuranceBranch: yup.string().required("این فیلد الزامی است."),
    phone: yup.string().required("این فیلد الزامی است."),
    cityCode: yup.string().required("این فیلد الزامی است."),
    city: yup.string().required("این فیلد الزامی است."),
    agencyType: yup.string().required("این فیلد الزامی است."),
    agencyName: yup.string().when("agencyType", ([value]) => {
      if (value=='legal') {
        return yup.string().required("این فیلد الزامی است.");
      }
      return yup.string();
    }),
  });

  const handleSearch = async (body): Promise<void> => {
    await axiosPost({ url: CHECK_AGENCY_CODE, body });
  };
  const handleCreateOtp = async (body): Promise<void> => {
    await axiosPost({ url: VALIDATE_OTP, body });
  };

  const { mutate: mutateAgencyCode } = useMutation({
    mutationFn: (e) => handleSearch(e),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (e) => handleCreateOtp(e),
  });
  const handleSearchAgentCode = useDebounce((term: string | number) => {
    console.log("Searching for:", term);
    const body = { agent_code: term };
    mutateAgencyCode(body as any);
  }, 1000);

  const onSubmit = async (values: any) => {
    console.log("values", values, curStep);
    const body = {
      phone_number: values?.phone,
    };
    await setCurStep("userInfo");
    await mutateAsync(body as any);
  };

  return {
    initialValues,
    validationSchema,
    onSubmit,
    isPending,
    handleSearchAgentCode,
  };
};
