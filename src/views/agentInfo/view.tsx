import { useFormikContext } from "formik";
import { FormikAutoComplete } from "../../components/elements/autoComplete/formikAutoComplete";
import { FormikTextField } from "../../components/elements/textField/formikTextField";
import { FormikRadio } from "../../components/elements/radio/formikRadio";
import { CustomRadio } from "../../components/elements/radio/customRadio";

export const AgentInfoView = ({ handleSearchAgentCode }) => {
  const { values } = useFormikContext();

  return (
    <div className="flex flex-col items-center gap-5 pt-4 pb-10 w-full">
      <FormikTextField
        name="agencyCode"
        placeholder="کد نمایندگی"
        onChange={(e) => handleSearchAgentCode(e.target.value)}
      />
      <FormikAutoComplete
        name="province"
        optionLabel="title"
        url="https://jsonplaceholder.typicode.com/posts"
        placeholder="استان"
      />
      <FormikAutoComplete
        name="city"
        optionLabel="title"
        url={`https://jsonplaceholder.typicode.com/posts/${values?.province?.id}`}
        disabled={!values?.province}
        placeholder="شهر"
      />
      <FormikTextField name="address" placeholder="آدرس" multiline rows={4} />
      <div className="grid grid-cols-6 gap-2 w-full">
        <div className="col-span-4">
          <FormikTextField name="cityCode" placeholder="کد شهر" />
        </div>
        <div className="col-span-2">
          <FormikTextField name="phone" placeholder="تلفن ثابت" />
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
        className={`overflow-hidden transition-all duration-1000 w-full ${
          values?.agencyType == "legal"
            ? "opacity-100 translate-y-2 h-fit"
            : "opacity-0 h-1"
        }`}
      >
        <FormikTextField name="agencyName" placeholder="نوع نمایندگی" />
      </div>
    </div>
  );
};
