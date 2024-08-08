
import { AuthLayout } from "../../../components/layouts/authLayout";
import { OtpVerificationView } from "./view";
import { useOtpVerificationViewModel } from "./viewModel";

export const OtpVerification = () => {
  const { validationSchema, initialValues, onSubmit, resendCode } =
    useOtpVerificationViewModel();

  return (
    <AuthLayout
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <OtpVerificationView resendCode={resendCode} />
    </AuthLayout>
  );
};
