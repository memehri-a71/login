import { Children } from "../../types/common";
import { AuthProvider } from "./authProvider";
import RQProvider from "./rqProvider";

export const Providers = ({ children }: Children) => {
  return (
    <AuthProvider>
      <RQProvider>{children}</RQProvider>
    </AuthProvider>
  );
};
