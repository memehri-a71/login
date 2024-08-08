import type { InitialValuesAgentInfo, UseAgentInfo } from "../imports";
import {
  // axiosGet,
  axiosPost,
  CHECK_AGENCY_CODE,
  // CHECK_AGENCY_CODE,
  // INSURANCE_BRANCH,
  useAuthContext,
  useDebounce,
  useMutation,
  yup,
} from "../imports";

export const useAgentInfoViewModel = (): UseAgentInfo => {
  const { user, setCurStep } = useAuthContext();
  const initialValues = {
    address: "",
    province: {},
    agencyCode: "",
    insuranceBranch: {},
    phone: "",
    cityCode: "",
    city: {},
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


  const handleSearch = async (body: any): Promise<void> => {
    await axiosPost({ url: CHECK_AGENCY_CODE, body });
  };
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (e) => handleSearch(e),
  });

  const handleSearchAgentCode = useDebounce((term: string | number, setFieldValue) => {
    const body = { agent_code: term };
    mutateAsync(body as any).catch(() => setFieldValue('agencyCode', ''))
  }, 800);

  const onSubmit = async (values: InitialValuesAgentInfo) => {
    const body = {
      address: values?.address,
      agency_type: values?.agencyType,
      agent_code: values?.agencyCode,
      city_code: values?.cityCode,
      county: values?.city?.name,
      first_name: user?.firstName,
      last_name: user?.lastName,
      insurance_branch: values?.insuranceBranch?.id,
      phone: values?.phone,
      phone_number: "09101659246",
      province: values?.province?.id,
      agency_name: values?.agencyName,
    };
    if (values?.agencyType == "real") {
      delete (body as Partial<any>)?.agency_name;
    }

    await mutateAsync(body as any).then(() => setCurStep("dashboard"));
  };

  return {
    initialValues,
    validationSchema,
    onSubmit,
    isPending,
    handleSearchAgentCode,
  };
};
