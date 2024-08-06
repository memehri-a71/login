import { ReactNode } from "react";
import { CustomButton } from "./elements/customButton";

interface AuthLayoutType {
  children: ReactNode;
}
export const AuthLayout = ({ children }: AuthLayoutType) => {
  return (
    <div>
      <div className="relative bg-[#0099a8] rounded-b-3xl h-[30vh]"></div>
      <div className="absolute top-[10%] right-7 left-7 bg-white rounded-xl shadow-lg h-fit px-5 pb-10 pt-7">
        {children}
        <CustomButton>ادامه</CustomButton>
      </div>
    </div>
  );
};
