import { AuthContext } from "../../context";
import { useAuthContextValue } from "../../context/authContextValue";
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
