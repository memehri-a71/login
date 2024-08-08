export interface InitialValuesPhoneVerification {
  phone: string;
}
export interface UsePhoneVerificationType {
  initialValues: InitialValuesPhoneVerification;
  validationSchema: any;
  onSubmit: (values: InitialValues) => void;
  isPending: boolean;
}
