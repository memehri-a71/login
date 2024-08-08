import { toast } from "react-toastify";

export function showSuccess(message: string, themeTost?: string): void {
  toast.success(message, {
    theme: themeTost || "light",
  });
}

export function showError(message: string, themeTost?: string): void {
  toast.error(message),
    {
      theme: themeTost || "light",
    };
}

export function showWarning(message: string, themeTost?: string): void {
  toast.warning(message),
    {
      theme: themeTost || "light",
    };
}

const HandelError = {
  showSuccess,
  showError,
  showWarning,
};

export default HandelError;
