
import { AuthLayout } from "../../../components/layouts/authLayout";
import { OtpVerificationView } from "./view";
import { useOtpVerificationViewModel } from "./viewModel";

export const OtpVerification = ({setCurStep}) => {
  const { validationSchema, initialValues, onSubmit, resendCode ,isPending} =
    useOtpVerificationViewModel(setCurStep);

  return (
    <AuthLayout
      initialValues={initialValues}
      validationSchema={validationSchema}
      isLoading={isPending}
      onSubmit={onSubmit}
    >
      <OtpVerificationView resendCode={resendCode} />
    </AuthLayout>
  );
};
