import { AuthLayout } from "../../components/authLayout";
import { AgentInfoView } from "./view";
import { useAgentInfoViewModel } from "./viewModel";

export const AgentInfo = () => {
  const { initialValues, validationSchema, onSubmit } = useAgentInfoViewModel();
  return (
    <AuthLayout
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <AgentInfoView/>
    </AuthLayout>
  );
};
