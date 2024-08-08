

import { AuthLayout } from "../../../components/layouts/authLayout";
import { PhoneVerificationView } from "./view";
import { usePhoneVerificationViewModel } from "./viewModel";

export const PhoneVerification = ({setCurStep}) => {
  const { initialValues, validationSchema, onSubmit,isPending } =
    usePhoneVerificationViewModel(setCurStep);
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
