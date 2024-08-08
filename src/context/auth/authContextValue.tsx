import { useState } from "react";

export const useAuthContextValue = (): any => {
  const [curStep, setCurStep] = useState("phone");
  const [phoneNumber, setPhoneNumber] = useState("");

  return { curStep, setCurStep, phoneNumber, setPhoneNumber };
};
