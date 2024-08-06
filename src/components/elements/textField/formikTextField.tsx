import { Field, useField } from 'formik'
import { CustomTextField } from './customTextField'


export const FormikTextField = (props) => {
  const { name, showErrorText = true } = props

  const [field, meta, helpers] = useField(name)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target
    void helpers?.setValue(value)
    props.onChange?.(event)
  }

  return (
    <Field name={name}>
      {() => (
        <CustomTextField
          {...props}
          value={props?.value || field.value}
          error={meta.touched ? Boolean(meta.error) : null}
          helperText={showErrorText && meta && meta.touched ? meta.error : ''}
          onChange={handleChange}
          onBlur={field.onBlur}
        />
      )}
    </Field>
  )
}
