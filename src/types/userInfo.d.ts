export interface InitialValuesType {
  firstName: string;
  lastName: string;
}
export interface UseUserInfoType {
  initialValues: InitialValuesType;
  validationSchema: any;
  onSubmit: (values: InitialValuesType) => void;
}
