

import { AuthLayout } from "../../../components/layouts/authLayout";
import { PhoneVerificationView } from "./view";
import { usePhoneVerificationViewModel } from "./viewModel";

export const PhoneVerification = () => {
  const { initialValues, validationSchema, onSubmit,isPending } =
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
