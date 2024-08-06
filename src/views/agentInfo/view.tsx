import { useFormikContext } from "formik";
import { FormikAutoComplete } from "../../components/elements/autoComplete/formikAutoComplete";
import { FormikTextField } from "../../components/elements/textField/formikTextField";
import { FormikRadio } from "../../components/elements/radio/formikRadio";

export const AgentInfoView = ({ handleSearchAgentCode }) => {
  const { values } = useFormikContext();

  return (
    <div className="flex flex-col items-center gap-6 pt-4 pb-10">
      <FormikTextField
        name="agentCode"
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
      <FormikRadio name="agencyType" />
      {/* <FormikTextField name="agencyType" placeholder="نوع نمایندگی" />  */}
    </div>
  );
};
