import { HTMLInputTypeAttribute } from 'react'
import { Control, Controller, FieldError, FieldValues, Path, RegisterOptions } from 'react-hook-form'
import { TextField } from '@mui/material'

interface FormInputControllerProps<TFieldsType extends FieldValues> {
  name: Path<TFieldsType>
  defaultValue?: string
  rules?: RegisterOptions
  error?: FieldError
  control: Control<TFieldsType>
}

interface InputTextProps<TFieldsType extends FieldValues> extends FormInputControllerProps<TFieldsType> {
  label: string
  type?: HTMLInputTypeAttribute
  disabled?: boolean
}

const InputText = <TFieldsType extends FieldValues>({
  name,
  control,
  label,
  type = 'text',
  disabled = false
}: InputTextProps<TFieldsType>) => {
  return (
    <Controller
      name={name}
      control={control}
      disabled={disabled}
      render={({ field, fieldState: { error } }) => (
        <TextField
          helperText={error ? error.message : null}
          size='medium'
          disabled={field.disabled}
          error={!!error}
          type={type}
          onChange={field.onChange}
          value={field.value}
          fullWidth
          label={label}
          variant='outlined'
        />
      )}
    />
  )
}

export default InputText
