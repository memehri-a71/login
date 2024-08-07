"use client";

import { Field } from "formik";
import type { FieldAttributes } from "formik";
import { CustomRadio } from "./customRadio";

export const FormikRadio = ({ name, onChange, ...props }: any) => {
  const handleChange = (form: any, value: any): void => {
    form.setFieldValue(name, JSON.parse(value));
    onChange?.(JSON.parse(value));
  };

  return (
    <Field name={name}>
      {({ form, field }: FieldAttributes<any>) => {
        const hasError = form.touched[name]
          ? Boolean(form?.errors[name])
          : false;
        const helperText = form.touched[name] ? form?.errors[name] : null;
        console.log(form.values);

        return (
          <CustomRadio
            {...props}
            defaultValue={JSON.stringify(field.value)}
            value={field.value}
            name={field.name}
            hasError={hasError}
            helperText={helperText}
            onChange={(value: any) => {
              console.log(value);

              handleChange(form, value);
            }}
          />
        );
      }}
    </Field>
  );
};
