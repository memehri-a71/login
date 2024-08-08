import {
  AgentInfo,
  OtpVerification,
  PhoneVerification,
  useAuthContext,
  UserInfo,
  Dashboard,
} from "./imports";

export const useLoginVeiwModel = () => {
  const { curStep }: {curStep:string}= useAuthContext();

  const routeStepMapping = {
    phone: PhoneVerification,
    otp: OtpVerification,
    userInfo: UserInfo,
    agentInfo: AgentInfo,
    dashboard: Dashboard,
  };

  const CurrentAuthComponent = routeStepMapping[curStep] ;

  return { CurrentAuthComponent };
};
