import { TextField } from "@mui/material";
import { CustomTextFieldType } from "../../../types/textField";


export const CustomTextField = (props: CustomTextFieldType) => {
  const {
    placeholder,
    size = "small",
    multiline = false,
    rows,
    maxLength = null,
  } = props;
  return (
    <TextField
      {...props}
      variant="outlined"
      placeholder={placeholder}
      fullWidth
      dir="rtl"
      size={size}
      multiline={multiline}
      rows={rows}
      inputProps={{ maxLength: maxLength }}
    />
  );
};
