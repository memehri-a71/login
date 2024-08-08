import { AgentInfoView, AuthLayout, useAgentInfoViewModel } from "../imports";

export const AgentInfo = () => {
  const {
    initialValues,
    validationSchema,
    onSubmit,
    handleSearchAgentCode,
  } = useAgentInfoViewModel();
  return (
    <AuthLayout
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <AgentInfoView
        handleSearchAgentCode={handleSearchAgentCode}
      />
    </AuthLayout>
  );
};
