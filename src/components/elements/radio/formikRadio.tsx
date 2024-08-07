"use client";

import { Field } from "formik";
import type { FieldAttributes } from "formik";
import { CustomRadio } from "./customRadio";

export const FormikRadio = ({ name, onChange, ...props }: any) => {
  return (
    <Field name={name}>
      {({ form, field }: FieldAttributes<any>) => {
        return (
          <CustomRadio
            {...props}
            defaultValue={JSON.stringify(field.value)}
            value={field.value}
            name={field.name}
            hasError={form.touched[name] ? Boolean(form?.errors[name]) : false}
            helperText={form.touched[name] ? form?.errors[name] : null}
            onChange={(e: any) => {
              form.setFieldValue(name, e.target.value);
              onChange?.(e.target.value);
            }}
          />
        );
      }}
    </Field>
  );
};
