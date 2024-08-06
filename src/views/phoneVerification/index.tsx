
import { AuthLayout } from "../../components/authLayout";
import { PhoneVerificationView } from "./view";
import { usePhoneVerificationViewModel } from "./viewModel";

export const PhoneVerification = () => {
  const { initialValues, validationSchema, onSubmit } =
    usePhoneVerificationViewModel();
  return (
    <AuthLayout
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <PhoneVerificationView />
    </AuthLayout>
  );

};
