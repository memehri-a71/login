import { useState } from "react";

export const useAuthContextValue = (): any => {
  const [curStep, setCurStep] = useState("phone");
  const [phoneNumber, setPhoneNumber] = useState("09000000000");

  return { curStep, setCurStep, phoneNumber, setPhoneNumber };
};
