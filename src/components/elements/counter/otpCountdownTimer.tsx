import { useEffect, useState } from "react";
import { CustomButton } from "../button/customButton";
import CountDownTimer from "./countDownTimer";
import { OtpCountdownTimerType } from "../../../types/counter";


export const OtpCountdownTimer = (props: OtpCountdownTimerType) => {
  const { handleResendOtp, isLoadingResend, defaultTimer } = props;

  const OTP_EXPIRE_TIME =3*60;
  const [timer, setTimer] = useState(defaultTimer || OTP_EXPIRE_TIME);

  useEffect(() => {
    if (!isLoadingResend && timer === 0) {
      setTimer(defaultTimer || OTP_EXPIRE_TIME);
    }
  }, [isLoadingResend]);

  return (
    <div className="flex gap-4 items-center">
      {timer === 0 ? (
        <CustomButton
          variant="text"
          type="button"
          onClick={() => {
            handleResendOtp();
          }}
        >
          <p>ارسال مجدد کد</p>
        </CustomButton>
      ) : (
        <CountDownTimer timer={timer} setTimer={setTimer} />
      )}
    </div>
  );
};
