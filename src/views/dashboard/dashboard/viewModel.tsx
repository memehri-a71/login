import { useAuthContext } from "../imports";

export const useDashboardViewModel = () => {
  const { setCurStep } = useAuthContext();
  const handleRedirect = () => {
    setCurStep("phone");
  };
  return { handleRedirect };
};
