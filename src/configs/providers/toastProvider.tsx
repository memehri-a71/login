import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Children } from "../../types/common";

export default function ToastProvider({ children }:Children): JSX.Element {
  return (
    <>
      {children}
      <ToastContainer
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        closeButton={false}
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
