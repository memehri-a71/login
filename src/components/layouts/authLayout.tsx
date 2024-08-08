import { CustomButton } from "../elements/button/customButton";
import { FormikWrapper } from "../form/formikWrapper";
import logo from "../../assets/logo.png";

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
        <img src={logo} className="mx-auto w-15 h-10 mb-5"/>
          {children}
          <CustomButton>ادامه</CustomButton>
        </div>
      </div>
    </FormikWrapper>
  );
};
