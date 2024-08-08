import type{ UseDashboard } from "../imports";
import { useAuthContext } from "../imports";

export const useDashboardViewModel = (): UseDashboard => {
  const { setCurStep } = useAuthContext();
  const handleRedirect = () => {
    setCurStep("phone");
  };
  return { handleRedirect };
};
