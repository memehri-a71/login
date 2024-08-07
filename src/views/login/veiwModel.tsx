import { useAuthContextValue } from "../../context/authContext/authContextValue";
import { PhoneVerification } from "./phoneVerification";
import { UserInfo } from "./useInfo";

export const useLoginVeiwModel = () => {
  const { curStep } = useAuthContextValue();
  console.log("curStep", curStep);

  const routeStepMapping = {
    phone: PhoneVerification,
    userInfo: UserInfo,
  };

  const CurrentAuthComponent = routeStepMapping[curStep];

  return { CurrentAuthComponent };
};
