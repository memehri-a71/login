import {
  COUNTRIES_WOP,
  FormikAutoComplete,
  FormikRadio,
  FormikTextField,
  INSURANCE_BRANCH,
  PROVINCES_WOP,
  UseAgentInfo,
  useFormikContext,
} from "../imports";

export const AgentInfoView = ({
  handleSearchAgentCode,
}: Pick<UseAgentInfo, "handleSearchAgentCode">) => {
  const { values, setFieldValue }: any = useFormikContext();

  return (
    <div className="flex flex-col items-center gap-5 pt-4 pb-10 w-full">
      <FormikTextField
        name="agencyCode"
        placeholder="کد نمایندگی"
        onChange={(e) => handleSearchAgentCode(e.target.value, setFieldValue)}
      />
      <FormikAutoComplete
        name="province"
        optionLabel="name"
        url={PROVINCES_WOP}
        placeholder="استان"
      />
      <FormikAutoComplete
        name="city"
        optionLabel="name"
        url={`${COUNTRIES_WOP}?province=${values?.province?.id}`}
        disabled={!values?.province}
        placeholder="شهر"
      />
      <FormikTextField name="address" placeholder="آدرس" multiline rows={4} />
      <FormikAutoComplete
        name="insuranceBranch"
        optionLabel="name"
        placeholder="شعبه بیمه"
        url={`${INSURANCE_BRANCH}?insurance=DEY&province=${values?.province?.id}`}
        querySearch='name'
      />
      <div className="grid grid-cols-6 gap-2 w-full">
        <div className="col-span-4">
          <FormikTextField name="phone" placeholder="تلفن ثابت" />
        </div>
        <div className="col-span-2">
          <FormikTextField name="cityCode" placeholder="کد شهر" />
        </div>
      </div>
      <div className="w-full">
        <FormikRadio
          name="agencyType"
          title="نوع نمایندگی"
          options={[
            { value: "real", label: "حقیقی" },
            { value: "legal", label: "حقوقی" },
          ]}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-1000 w-full ${values?.agencyType == "legal"
          ? "opacity-100 translate-y-2 h-fit"
          : "opacity-0 h-1"
          }`}
      >
        <FormikTextField name="agencyName" placeholder="نوع نمایندگی" />
      </div>
    </div>
  );
};
