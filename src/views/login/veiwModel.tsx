import { PhoneVerification } from "../phoneVerification";

export const useLoginVeiwModel = () => {
  const curStep = "phone";

  const routeStepMapping = {
    phone: PhoneVerification,
  };

  const CurrentAuthComponent = routeStepMapping[curStep];

  return { CurrentAuthComponent };
};
