import { Children } from "../../types/common";
import { AuthProvider } from "./authProvider";
import RQProvider from "./rqProvider";
import RtlProvider from "./rtlProvider";
import CustomThemeProvider from "./themeProvider";

export const Providers = ({ children }: Children) => {
  return (
    <AuthProvider>
      <RtlProvider>
        <CustomThemeProvider>
          <RQProvider>{children}</RQProvider>
        </CustomThemeProvider>
      </RtlProvider>
    </AuthProvider>
  );
};
