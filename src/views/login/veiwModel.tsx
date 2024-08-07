import { useEffect } from "react";
import { useAuthContextValue } from "../../context/authContextValue";
import { PhoneVerification } from "./phoneVerification";
import { UserInfo } from "./useInfo";


export const useLoginVeiwModel = () => {
  debugger;
  const { curStep } = useAuthContextValue();

  const routeStepMapping = {
    phone: PhoneVerification,
    userInfo: UserInfo,
  };


  const CurrentAuthComponent = routeStepMapping[curStep];

  return { CurrentAuthComponent };
};
