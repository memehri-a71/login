import { AgentInfo } from "./agentInfo";
import { OtpVerification } from "./otpVerification";
import { PhoneVerification } from "./phoneVerification";
import { UserInfo } from "./useInfo";

export const useLoginVeiwModel = () => {
  // const [curStep, setCurStep] = useState("phone");
  // console.log("curStep", curStep);
  // const { curStep, setCurStep } = useAuthContextValue();

  const routeStepMapping = {
    phone: PhoneVerification,
    userInfo: UserInfo,
    otp: OtpVerification,
    agentInfo: AgentInfo,
  };

  const CurrentAuthComponent = routeStepMapping["phone"];

  return { CurrentAuthComponent };
};
