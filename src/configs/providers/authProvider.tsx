import { AuthContext } from "../../context/auth";
import { useAuthContextValue } from "../../context/auth/authContextValue";
import { Children } from "../../types/common";

export const AuthProvider = ({ children }: Children) => {
  const { curStep, setCurStep, phoneNumber, setPhoneNumber } =
    useAuthContextValue();
    
  return (
    <AuthContext.Provider
      value={{ curStep, setCurStep, phoneNumber, setPhoneNumber }}
    >
      {children}
    </AuthContext.Provider>
  );
};
