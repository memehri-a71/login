import { Field, useField } from "formik";
import { CustomTextField } from "./customTextField";
import { FormikTextFieldType } from "../../../types/textField";
import { ChangeEvent } from "react";

export const FormikTextField = (props: FormikTextFieldType) => {
  const { name, showErrorText = true } = props;
  const [field, meta, helpers] = useField(name);

  return (
    <Field name={name}>
      {() => (
        <CustomTextField
          {...props}
          value={props?.value || field.value}
          error={meta.touched && Boolean(meta.error) }
          helperText={showErrorText && meta && meta.touched ? meta.error : ""}
          onChange={(event: ChangeEvent<HTMLInputElement>): void => {
            void helpers?.setValue(event.target.value);
            props.onChange?.(event);
          }}
          onBlur={field.onBlur}
        />
      )}
    </Field>
  );
};
