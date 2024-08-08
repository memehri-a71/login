import { useState } from "react";
import { AuthContext } from "../../context/auth/useAuthContext";
import { Children } from "../../types/common";

export const AuthProvider = ({ children }: Children) => {
  const [curStep, setCurStep] = useState("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [user, setUser] = useState({
    firsName: "",
    lastName: "",
  });
  
  return (
    <AuthContext.Provider
      value={{
        curStep,
        setCurStep,
        phoneNumber,
        setPhoneNumber,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
