import { TextField } from "@mui/material";

interface FormikTextFieldType {
  name: string;
  placeholder?: string;
  size?: "small" | "medium";
  multiline?: boolean;
  rows?: number;
}
export const CustomTextField = (props: FormikTextFieldType) => {
  const { placeholder, size = "small", multiline = false, rows } = props;
  return (
    <TextField
      variant="outlined"
      placeholder={placeholder}
      fullWidth
      dir="rtl"
      size={size}
      multiline={multiline}
      rows={rows}
    />
  );
};
