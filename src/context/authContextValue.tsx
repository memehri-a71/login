import { useState } from "react";

export const useAuthContextValue = (): any => {
  const [curStep, setCurStep] = useState("phone");

  return { curStep, setCurStep };
};
