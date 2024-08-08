import React, { useEffect, useState } from "react";
import { CustomButton } from "../button/customButton";
import CountDownTimer from "./countDownTimer";


export const OtpCountdownTimer = ({
  handleResendOtp,
  isLoadingResend,
  defaultTimer,
}) => {
  const OTP_EXPIRE_TIME = 5;
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
          {/* {isLoadingResend ? <Spinner /> : null} */}
        </CustomButton>
      ) : (
        <CountDownTimer timer={timer} setTimer={setTimer} />
      )}
    </div>
  );
};


