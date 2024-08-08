import { useAuthContextValue } from "../../context/authContextValue";
import { OtpVerification } from "./otpVerification";
import { PhoneVerification } from "./phoneVerification";
import { UserInfo } from "./useInfo";
import { useState } from "react";

export const useLoginVeiwModel = () => {
  // const [curStep, setCurStep] = useState("phone");
  // console.log("curStep", curStep);
  // const { curStep, setCurStep } = useAuthContextValue();

  const routeStepMapping = {
    phone: PhoneVerification,
    userInfo: UserInfo,
    otp: OtpVerification,
  };

  const CurrentAuthComponent = routeStepMapping["otp"];

  return { CurrentAuthComponent };
};
