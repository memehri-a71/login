import {
  AgentInfo,
  OtpVerification,
  PhoneVerification,
  useAuthContext,
  UserInfo,
} from "./imports";

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
