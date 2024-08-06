import { Formik } from "formik";

export const FormikWrapper = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}: any): React.ReactElement => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    enableReinitialize
    onSubmit={onSubmit}
  >
    {() => {
      return children;
    }}
  </Formik>
);
