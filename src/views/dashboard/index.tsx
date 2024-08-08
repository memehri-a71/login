import { DashboardView, useDashboardViewModel } from "./imports";


export const Dashboard = () => {
  const { handleRedirect } = useDashboardViewModel();

  return <DashboardView handleRedirect={handleRedirect} />;
};
