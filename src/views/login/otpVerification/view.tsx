import { ResendCodeType } from "../../../types/otpVerification";
import { InputOtp, OtpCountdownTimer, useFormikContext } from "../imports";

export const OtpVerificationView = ({ resendCode }:{resendCode:ResendCodeType}) => {
  const formikProps = useFormikContext();

  return (
    <>
      <InputOtp />
      <div className="flex justify-center gap-3 items-center pb-5">
        <OtpCountdownTimer
          handleResendOtp={() => {
            formikProps.resetForm();
            resendCode();
          }}
        />
      </div>
    </>
  );
};
