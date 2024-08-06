'use client'

import { useEffect, useRef } from 'react'
import { useFormikContext } from 'formik'
import OtpInput from '../otpInput'


const OtpView = ({
  resendCode,
  isLoadingResend,
  isPending,
  isSuccess,
  defaultTimer,
  isError,
}: any): any => {
  const formikProps = useFormikContext()

  const inputRefs = useRef<HTMLInputElement[]>([])

  useEffect(() => {
    if (!isEmptyObject(formikProps.touched) && formikProps.isValid) {
      formikProps.submitForm()
    }
  }, [formikProps.isValid])

  useEffect(() => {
    inputRefs.current[0].focus()
  }, [isError])

  return (
    <>
      <div className="flex justify-between items-center pb-5">
        <p className="title-sm items-center">{t('confirmOtpText')}</p>
        {/* <OtpCountdownTimer
          isLoadingResend={isLoadingResend}
          defaultTimer={defaultTimer}
          handleResendOtp={() => {
            formikProps.resetForm()
            resendCode()
            inputRefs.current[0].focus()
          }}
        /> */}
      </div>
      <OtpInput disabled={isPending || isSuccess} inputRefs={inputRefs} />
   
    </>
  )
}

export default OtpView
