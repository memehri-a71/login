import { FormikWrapper } from "../../../../components/form/formikWrapper"


const Otp = ({
  endPoint,
  method,
  onSuccess,
  className,
  resendCode,
  isLoadingResend,
  defaultTimer,
  extraBody = {},
}: ): any => {
  // const {
  //   validationSchema,
  //   initialValues,
  //   handleSubmit,
  //   isPending,
  //   isSuccess,
  //   isError,
  // } = useOtpViewModel(endPoint, method, onSuccess, extraBody)

  return (
    <div className={className}>
      <FormikWrapper
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <OtpView
          resendCode={resendCode}
          isLoadingResend={isLoadingResend}
          isPending={isPending}
          isSuccess={isSuccess}
          defaultTimer={defaultTimer}
          isError={isError}
        />
      </FormikWrapper>
    </div>
  )
}

export default Otp
