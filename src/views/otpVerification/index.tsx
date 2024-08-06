import React from "react";
import { AuthLayout } from "../../components/authLayout";
import { OtpVerificationView } from "./view";

export const OtpVerification = () => {
  return (
    <AuthLayout
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <OtpVerificationView />
    </AuthLayout>
  );
};
