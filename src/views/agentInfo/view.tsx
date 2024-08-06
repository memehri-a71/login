import { AuthLayout } from "../../components/authLayout";
import { FormikTextField } from "../../components/elements/textField/formikTextField";

export const AgentInfoView = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col items-center gap-6 pt-4 pb-10">
        <FormikTextField name="agentCode" placeholder="کد نمایندگی" />
        {/* <FormikSelect name="province" />
        <FormikSelect name="city" /> */}
        <FormikTextField name="address" placeholder="آدرس" multiline rows={4} />
        <div className="grid grid-cols-6 gap-2">
          <div className="col-span-4">
            <FormikTextField name="cityCode" placeholder="کد شهر" />
          </div>
          <div className="col-span-2">
            <FormikTextField name="phone" placeholder="تلفن ثابت" />
          </div>
        </div>
        {/* <FormikRadioGroup /> */}
        <FormikTextField name="agencyType" placeholder="نوع نمایندگی" />
      </div>
    </AuthLayout>
  );
};
