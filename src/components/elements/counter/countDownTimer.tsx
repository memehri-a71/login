import { useEffect } from 'react'


const CountDownTimer = ({
  timer,
  setTimer,
  onFinish,
}): JSX.Element => {
  const sec = timer % 60
  const min = Math.floor(timer / 60)

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1)
      }, 1000)
      return () => clearInterval(interval)
    }
    onFinish?.()
  }, [timer, onFinish])

  return (
    <p >
      {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
    </p>
  )
}

export default CountDownTimer
