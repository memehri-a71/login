import { useFormikContext } from "formik";
import { InputOtp } from "../../../components/elements/inputOtp/inputOtp";
import { OtpCountdownTimer } from "../../../components/elements/counter/otpCountdownTimer";

export const OtpVerificationView = ({ resendCode }) => {
  const formikProps = useFormikContext();

  return (
    <>
      <InputOtp />
      <div className="flex justify-center gap-3 items-center pb-5">
        <OtpCountdownTimer
          // isLoadingResend={isLoadingResend}
          handleResendOtp={() => {
            formikProps.resetForm();
            resendCode();
          }}
        />
      </div>
    </>
  );
};
