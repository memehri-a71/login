import { AgentInfo } from "./agentInfo";
import { OtpVerification } from "./otpVerification";
import { PhoneVerification } from "./phoneVerification";
import { UserInfo } from "./useInfo";
import { useAuthContext } from "../../context/auth/useAuthContext";

export const useLoginVeiwModel = () => {
  const { curStep } = useAuthContext();

  const routeStepMapping = {
    phone: PhoneVerification,
    otp: OtpVerification,
    userInfo: UserInfo,
    agentInfo: AgentInfo,
  };

  const CurrentAuthComponent = routeStepMapping[curStep];

  return { CurrentAuthComponent };
};
