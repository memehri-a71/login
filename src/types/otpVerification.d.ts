export type InitialValuesOtp = Record<string, number>;

export type ResendCodeType = () => void;

export interface UseOtpVerification {
  validationSchema: any;
  initialValues: Record<string, number>;
  onSubmit: (
    values: InitialValuesOtp,
    formikProps: { resetForm: ResendCodeType }
  ) => void;
  resendCode: ResendCodeType;
  isPending: boolean;
}

export interface BodyOtp {
  code: string;
  phone_number: string;
}
