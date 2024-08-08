import { AuthLayout, UserInfoView, useUserInfoViewModel } from "../imports";

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
