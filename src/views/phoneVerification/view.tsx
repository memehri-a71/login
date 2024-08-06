
import { FormikTextField } from "../../components/elements/textField/formikTextField";

export const PhoneVerificationView = () => {
  return (
    <div className="flex flex-col items-center gap-2 pb-10">
      <p className="font-semibold text-md">شماره موبایل خود را وارد نمایید.</p>
      <p className="text-sm pb-3">کد تایید برای شما ارسال خواهد شد.</p>
      <FormikTextField name="phone" placeholder="تلفن همراه" />
   
    </div>
  );
};
``