export interface AutoCompleteProps {
  error: boolean | null;
  helperText: string;
  onChange: (value: any) => void;
  value: any
  setFieldValue: any
  onBlur: () => void
  querySearch?: string
}


export interface CustomAutoCompleteProps extends AutoCompleteProps {
  url?: string | undefined;
  optionLabel?: string;
  placeholder?: string;
  disabled?: boolean;

}

export interface FormikAutoCompleteProps
  extends Partial<CustomAutoCompleteProps> {
  name: string;
}
