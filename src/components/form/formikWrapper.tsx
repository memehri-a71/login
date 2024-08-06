import { Form, Formik } from "formik";

export const FormikWrapper = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}: any): React.ReactElement => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {() => (
      <Form>
        {children}
      </Form>
    )}
  </Formik>
);
