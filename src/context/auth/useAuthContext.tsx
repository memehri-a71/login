import { createContext, useContext } from "react";

export const AuthContext = createContext("");

export const useAuthContext = (): any => {
  return useContext(AuthContext);
};
