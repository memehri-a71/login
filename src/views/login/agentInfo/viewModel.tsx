import * as yup from "yup";
import { axiosGet, axiosPost } from "../../../configs/httpService/httpService";
import {
  CHECK_AGENCY_CODE,
  INSURANCE_BRANCH,
  VALIDATE_OTP,
} from "../../../constants/endPoints";
import { useMutation } from "@tanstack/react-query";
import { useDebounce } from "../../../hook/useDebounce";
import { useAuthContextValue } from "../../../context/auth/authContextValue";
import { showError } from "../../../hook/useToust";

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
    agencyType: "",
    agencyName: "",
  };
  const validationSchema = yup.object({
    agencyCode: yup.number().required("این فیلد الزامی است."),
    province: yup.object().required("این فیلد الزامی است."),
    city: yup.object().required("این فیلد الزامی است."),
    address: yup.string().required("این فیلد الزامی است."),
    insuranceBranch: yup.object().required("این فیلد الزامی است."),
    phone: yup.string().required("این فیلد الزامی است."),
    cityCode: yup.string().required("این فیلد الزامی است."),
    agencyType: yup.string().required("این فیلد الزامی است."),
    agencyName: yup.string().when("agencyType", ([value]) => {
      if (value === "legal") {
        return yup.string().required("این فیلد الزامی است.");
      }
      return yup.string();
    }),
  });

  const handleSearch = async (body): Promise<void> => {
    await axiosPost({ url: CHECK_AGENCY_CODE, body }).catch((error) =>
      showError(error)
    );
  };
  const handleSearchAgentCode = useDebounce((term: string | number) => {
    const body = { agent_code: term };
    mutateAgencyCode(body as any);
  }, 1000);

  const handleSearchInsuranceBranch = useDebounce(({ term, provinceId }) => {
    axiosGet({
      url: `${INSURANCE_BRANCH}?name=${term}&insurance=DEY&province=${provinceId}`,
    });
  }, 1000);

  const handleCreateOtp = async (body): Promise<void> => {
    await axiosPost({ url: VALIDATE_OTP, body });
  };

  const { mutate: mutateAgencyCode } = useMutation({
    mutationFn: (e) => handleSearch(e),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (e) => handleCreateOtp(e),
  });

  const onSubmit = async (values: any) => {
    console.log("values", values);
    const body = {
      address: values?.address,
      type_agency: values?.agencyType,
      code_agent: values?.agencyCode,
      code_city: values?.cityCode,
      county: values?.city?.name,
      first_name: "values?.first_name",
      name_last: "values?.name_last",
      branch_insurance: values?.insuranceBranch?.id,
      phone: values?.phone,
      phone_number: "09101659246",
      province: values?.province?.id,
      name_agency: values?.agencyName,
    };
    if (values?.agencyType == "real") {
      delete body.name_agency;
    }
    await setCurStep("userInfo");
    await mutateAsync(body as any);
  };

  return {
    initialValues,
    validationSchema,
    onSubmit,
    isPending,
    handleSearchAgentCode,
    handleSearchInsuranceBranch,
  };
};
