import { Children } from "../../types/common";
import { AuthProvider } from "./authProvider";
import RQProvider from "./rqProvider";
import RtlProvider from "./rtlProvider";

export const Providers = ({ children }: Children) => {
  return (
    <AuthProvider>
      <RtlProvider>
        <RQProvider>{children}</RQProvider>
      </RtlProvider>
    </AuthProvider>
  );
};
