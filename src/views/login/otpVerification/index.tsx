import {
  AuthLayout,
  OtpVerificationView,
  useOtpVerificationViewModel,
} from "../imports";

export const OtpVerification = () => {
  const { validationSchema, initialValues, onSubmit, resendCode, isPending } =
    useOtpVerificationViewModel();

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
