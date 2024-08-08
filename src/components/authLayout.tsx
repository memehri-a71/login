import { CustomButton } from "./elements/customButton";
import { FormikWrapper } from "./form/formikWrapper";

export const AuthLayout = (props: any) => {
  const { initialValues, validationSchema, onSubmit, children } = props;

  return (
    <FormikWrapper
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div>
        <div className="relative bg-primary-color rounded-b-3xl h-[30vh]"></div>
        <div className="absolute top-[10%] right-7 left-7 bg-white rounded-xl shadow-lg h-fit px-5 pb-10 pt-7">
          {children}
          <CustomButton>ادامه</CustomButton>
        </div>
      </div>
    </FormikWrapper>
  );
};
