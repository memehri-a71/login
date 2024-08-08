import { useEffect } from "react";
import { CountDownTimerType } from "../../../types/counter";

const CountDownTimer = (props: CountDownTimerType): JSX.Element => {
  const { timer, setTimer, onFinish } = props;
  const sec = timer % 60;
  const min = Math.floor(timer / 60);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer: number) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
    onFinish?.();
  }, [timer, onFinish]);

  return (
    <p>
      {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
    </p>
  );
};

export default CountDownTimer;
