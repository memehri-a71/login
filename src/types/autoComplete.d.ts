export interface CustomAutoCompleteProps {
  url: string;
  optionLabel: string;
  placeholder: string;
  disabled: boolean;
  error: boolean | null;
  helperText: string;
  onChange: (value: any) => void;
}

export interface FormikAutoCompleteProps
  extends Partial<CustomAutoCompleteProps> {
  name: string;
}
