import {useState } from "react";


export const useAuthContextValue = (): any => {
  debugger;
  const [curStep, setCurStep] = useState("phone");

  return { curStep, setCurStep };
};
