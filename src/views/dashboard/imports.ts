import { DashboardView } from "./dashboard/view";
import { CustomButton } from "../../components/elements/button/customButton";
import logo from "../../assets/images/logo.png";
import { useAuthContext } from "../../context/auth/useAuthContext";
import { useDashboardViewModel } from "./dashboard/viewModel";
import type { UseDashboard } from "../../types/dashboard";

export { DashboardView, CustomButton, logo, useAuthContext, useDashboardViewModel };

export type { UseDashboard };
