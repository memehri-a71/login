
import { AuthContext } from "../../context";
import { useAuthContextValue } from "../../context/authContextValue";
import { Children } from "../../types/common";

export const AuthProvider = ({ children }: Children) => {
  const { curStep, setCurStep } = useAuthContextValue();
  return (
    <AuthContext.Provider value={{ curStep, setCurStep }}>
      {children}
    </AuthContext.Provider>
  );
};
