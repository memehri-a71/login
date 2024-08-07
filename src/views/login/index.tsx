import { useAuthContextValue } from "../../context/authContextValue";
import { AgentInfo } from "./agentInfo";
import { PhoneVerification } from "./phoneVerification";
import { UserInfo } from "../useInfo";
import { useLoginVeiwModel } from "./veiwModel";

export const Login = (): any => {
  const { CurrentAuthComponent } = useLoginVeiwModel();
  const { curStep } = useAuthContextValue();


  return <AgentInfo /> 
};
