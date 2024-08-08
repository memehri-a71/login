export interface CustomTextFieldType {
  name: string;
  placeholder?: string;
  size?: "small" | "medium";
  multiline?: boolean;
  rows?: number;
  helperText?: string;
  maxLength?: null | number;
  fullWidth?: boolean;
}

export interface FormikTextFieldType extends Partial<CustomTextFieldType> {
  [x: string]: any;
  value?: any;
  name: string;
  showErrorText?: boolean;
  onChange?: (value: any) => void;
}
