import { AuthLayout } from "../../components/authLayout";
import { AgentInfoView } from "./view";
import { useAgentInfoViewModel } from "./viewModel";

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
