import { AuthLayout } from "../../components/authLayout";
import { AgentInfoView } from "./view";
import { useAgentInfoViewModel } from "./viewModel";

export const AgentInfo = () => {
  const { initialValues, validationSchema, onSubmit, handleSearchAgentCode } =
    useAgentInfoViewModel();
  return (
    <AuthLayout
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <AgentInfoView handleSearchAgentCode={handleSearchAgentCode} />
    </AuthLayout>
  );
};
