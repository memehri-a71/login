
import { CustomButton, logo } from "../imports";
import type { UseDashboard } from "../imports";

export const DashboardView = ({ handleRedirect }: UseDashboard) => {

  return (
    <>
      <div className="relative bg-primary-color h-[100vh] pt-20">
        <img src={logo} className="mx-auto w-15 h-10" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-lg h-fit px-5 pb-10 pt-7">
        <p className="py-2">نماینده محترم:</p>
        <p className="py-2">
          درخواست ثبت‌نام شما در حال بررسی است، در صورت تایید اطلاعات،
          اپلیکیشن مورد نظر فعال خواهد شد.
        </p>
        <CustomButton type='button' onClick={handleRedirect}>ورود با حساب کاربری دیگر</CustomButton>
      </div>
    </>
  );
};
