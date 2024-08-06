import { FormikTextField } from "../../components/elements/textField/formikTextField";

export const UserInfoView = () => {
  return (
    <div className="flex flex-col items-center gap-8 pt-4 pb-10">
      <FormikTextField name="firstName" placeholder="نام" />
      <FormikTextField name="lastName" placeholder="نام خانوادگی" />
    </div>
  );
};
