import { AgentInfoView, AuthLayout, useAgentInfoViewModel } from "../imports";

export const AgentInfo = () => {
  const {
    initialValues,
    validationSchema,
    onSubmit,
    handleSearchAgentCode,
    handleSearchInsuranceBranch,
  } = useAgentInfoViewModel();
  return (
    <AuthLayout
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <AgentInfoView
        handleSearchAgentCode={handleSearchAgentCode}
        handleSearchInsuranceBranch={handleSearchInsuranceBranch}
      />
    </AuthLayout>
  );
};
