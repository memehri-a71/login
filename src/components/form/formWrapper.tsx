import { Form } from "formik";
import { FormikWrapper } from "./formikWrapper";

export const FormWrapper = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}: any): JSX.Element => {
  return (
    <FormikWrapper
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => {
        return <Form>{children}</Form>;
      }}
    </FormikWrapper>
  );
};
