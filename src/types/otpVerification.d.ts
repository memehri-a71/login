export type InitialValuesOtp = Record<string, number>;

export interface UseOtpVerification {
  validationSchema: any;
  initialValues: InitialValuesOtp;
  onSubmit: (
    values: InitialValuesOtp,
    formikProps: { resetForm: () => void }
  ) => void;
  resendCode: () => void;
  isPending: boolean;
}

export interface BodyOtp {
  code: string;
  phone_number: string;
}