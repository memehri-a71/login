import { CustomButton } from "../../components/elements/button/customButton";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";

export const DashboardView = () => {
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
            load ? "opacity-100 absolute bottom-0 left-0 right-0" : "opacity-0 absolute -bottom-40 scroll-m-0"
          }`}
        >
          <div className=" bg-white rounded-t-3xl shadow-lg h-fit px-5 pb-10 pt-7">
            <p className="py-2">نماینده محترم:</p>
            <p className="py-2">
              درخواست ثبت‌نام شما در حال بررسی است، در صورت تایید اطلاعات،
              اپلیکیشن مورد نظر فعال خواهد شد.
            </p>
            <CustomButton>ورود با حساب کاربری دیگر</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};
