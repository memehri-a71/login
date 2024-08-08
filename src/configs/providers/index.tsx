import { Children } from "../../types/common";
import { AuthProvider } from "./authProvider";
import RQProvider from "./rqProvider";
import RtlProvider from "./rtlProvider";
import CustomThemeProvider from "./themeProvider";
import ToastProvider from "./toastProvider";

export const Providers = ({ children }: Children) => {
  return (
    <AuthProvider>
      <RtlProvider>
        <CustomThemeProvider>
          <RQProvider>
            <ToastProvider>{children}</ToastProvider>
          </RQProvider>
        </CustomThemeProvider>
      </RtlProvider>
    </AuthProvider>
  );
};
