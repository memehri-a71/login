import * as yup from 'yup'

export const useOtpViewModel = (
  endPoint: string,
  method: any,
  onSuccess: any,
  extraBody: any,
) => {
  const { mutateAsync, isPending, isSuccess, isError } = useAxiosMutation(
    endPoint,
    method,
  )
  const validationSchema = yup.object({
    name0: yup.number().required(),
    name1: yup.number().required(),
    name2: yup.number().required(),
    name3: yup.number().required(),
  })

  const initialValues = {
    name0: '',
    name1: '',
    name2: '',
    name3: '',
  }

  const handleSubmit = async (curValues: any, formikProps: any) => {
    // const condition = Object.values(curValues).every(
    //   (item) => item !== 0 && item !== '',
    // )
    // const values = Object.values(curValues).map((item: any) => {
    //   return item[item.length - 1]
    // })
    // if (condition) {
    //   const otpCode = Object.values(values).join('')
    //   const curBody = { otp: otpCode, ...extraBody }
    //   await mutateAsync(curBody)
    //     .then((res: any) => {
    //       onSuccess(res)
    //     })
    //     .catch(() => {
    //       formikProps.resetForm()
    //     })
    // }
  }
  return {
    handleSubmit,
    isSuccess,
    isError,
    initialValues,
    validationSchema,
    isPending,
  }
}
