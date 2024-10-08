

import type { FieldAttributes } from "formik";
import { Field } from "formik";
import { CustomAutoComplete } from "./customAutoComplete";
import { FormikAutoCompleteProps } from "../../../types/autoComplete";

export const FormikAutoComplete = (props:FormikAutoCompleteProps) => {
  return (
    <Field name={props.name}>
      {({ field, form }: FieldAttributes<any>) => {
        return (
          <CustomAutoComplete
            {...props}
            value={field?.value}
            setFieldValue={form.setFieldValue}
            error={
              form.touched[field.name] ? Boolean(form.errors[field.name]) : null
            }
            helperText={
              form.touched[field.name] ? form.errors[field.name] : null
            }
            onChange={(value) => {
              form.setFieldValue(props.name, value);
            }}
            onBlur={field.onBlur}
          />
        );
      }}
    </Field>
  );
};
