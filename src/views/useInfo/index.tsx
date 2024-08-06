import { AuthLayout } from "../../components/authLayout";
import { UserInfoView } from "./view";
import { useUserInfoViewModel } from "./viewModel";

export const UserInfo = () => {
  const { initialValues, validationSchema, onSubmit } = useUserInfoViewModel();
  return (
    <AuthLayout
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <UserInfoView />
    </AuthLayout>
  );
};
