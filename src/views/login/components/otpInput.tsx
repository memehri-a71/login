import { type ChangeEvent, useEffect } from 'react'
import { useFormikContext } from 'formik'
import { FormikTextField } from '../../../components/elements/textField/formikTextField'


const OtpInput = ({ length = 4, inputRefs, disabled }: any) => {
  const otp = new Array(length).fill('')

  const formikProps = useFormikContext()

  const handleChange = (index: any, e: any) => {
    const numberRegex = /^[0-9]$/
    const value = e.target.value
    if (!numberRegex.test(value)) {
      formikProps.setFieldValue(`name${index}`, '')
    }
    if (
      value &&
      numberRegex.test(value) &&
      index < length - 1 &&
      inputRefs.current[index + 1]
    ) {
      inputRefs.current[index + 1].focus()
    }
  }

  const handleKeyDown = (e: any, index: any) => {
    if (e?.key === 'Backspace' && index > 0 && inputRefs.current[index - 1]) {
      formikProps.setFieldValue(`name${index}`, '')
      inputRefs.current[index - 1].focus()
    }
  }

  useEffect(() => {
    inputRefs.current[0].focus()
  }, [])

  return (
    <div
      className="flex justify-center items-center gap-x-2 text-red-600"
      style={{ direction: 'ltr' }}
    >
      {otp.map((_value, index) => {
        return (
          <FormikTextField
            key={`index-${index}`}
            fullWidth={false}
            // disabled={disabled}
            // borderColorDefault="#017456"
            // borderColorOnFocus="#01BC8D"
            // borderColorOnHover="#017456"
            // showErrorText={false}
            // borderColorError="green"
            // inputProps={{
            //   autoComplete: 'off',
            //   maxLength: 1,
            //   className:
            //     '!rounded-xl !font-bold !text-xl  text-center h-14 w-14',
            //   type: 'tel',
            // }}
            inputRef={(input: HTMLInputElement | null) => {
              if (input) {
                inputRefs.current[index] = input
              }
            }}
            name={`name${index}`}
            className="border-0 dontShow-number-input "
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(index, e)
            }
            onKeyDown={(e: ChangeEvent<HTMLInputElement>) => {
              handleKeyDown(e, index)
            }}
          />
        )
      })}
    </div>
  )
}
export default OtpInput
