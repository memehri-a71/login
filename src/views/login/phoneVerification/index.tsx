import {
  AuthLayout,
  PhoneVerificationView,
  usePhoneVerificationViewModel,
} from "../imports";

export const PhoneVerification = () => {
  const { initialValues, validationSchema, onSubmit, isPending } =
    usePhoneVerificationViewModel();
  return (
    <AuthLayout
      initialValues={initialValues}
      validationSchema={validationSchema}
      isLoading={isPending}
      onSubmit={onSubmit}
    >
      <PhoneVerificationView />
    </AuthLayout>
  );
};
