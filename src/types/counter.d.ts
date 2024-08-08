export interface OtpCountdownTimerType {
    handleResendOtp: () => void;
    isLoadingResend?: boolean;
    defaultTimer?: number;
  }

  export interface CountDownTimerType {
    timer: number;
    setTimer: any;
    onFinish?: () => void;
  }