import { DashboardView } from "./imports";
import { useDashboardViewModel } from "./dashboard/viewModel";

export const Dashboard = () => {
  const { handleRedirect } = useDashboardViewModel();
  return <DashboardView handleRedirect={handleRedirect} />;
};
