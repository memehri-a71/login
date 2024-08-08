
import { useEffect, useState } from "react";
import { CustomButton, logo } from "../imports";
import { UseDashboard } from "../../../types/dashboard";

export const DashboardView = ({handleRedirect}:UseDashboard) => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <div>
      <div className="relative bg-primary-color h-[100vh] ">
        <img src={logo} className="mx-auto w-15 h-10" />
        <div
          className={`overflow-hidden transition-all duration-1000 w-full ${
            load
              ? "opacity-100 absolute bottom-0 left-0 right-0"
              : "opacity-0 absolute -bottom-40 scroll-m-0"
          }`}
        >
          <div className=" bg-white rounded-t-3xl shadow-lg h-fit px-5 pb-10 pt-7">
            <p className="py-2">نماینده محترم:</p>
            <p className="py-2">
              درخواست ثبت‌نام شما در حال بررسی است، در صورت تایید اطلاعات،
              اپلیکیشن مورد نظر فعال خواهد شد.
            </p>
            <CustomButton type='button' onClick={handleRedirect}>ورود با حساب کاربری دیگر</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};
