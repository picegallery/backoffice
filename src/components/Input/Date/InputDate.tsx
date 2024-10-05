import { HTMLInputTypeAttribute } from 'react'
import { Control, Controller, FieldError, FieldValues, Path, RegisterOptions } from 'react-hook-form'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs'

interface FormInputControllerProps<TFieldsType extends FieldValues> {
  name: Path<TFieldsType>
  defaultValue?: string
  rules?: RegisterOptions
  error?: FieldError
  control: Control<TFieldsType>
}

interface InputDateProps<TFieldsType extends FieldValues> extends FormInputControllerProps<TFieldsType> {
  label: string
  type?: HTMLInputTypeAttribute
  disabled?: boolean
}

const InputDate = <TFieldsType extends FieldValues>({
  name,
  control,
  label,
  type = 'text',
  disabled = false
}: InputDateProps<TFieldsType>) => {
  return (
    <Controller
      name={name}
      control={control}
      disabled={disabled}
      render={({ field, fieldState: { error } }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            {...field}
            value={field.value ? dayjs(field.value) : null} // Convert ISO string to dayjs object
            onChange={(newValue) => {
              // Ensure the value is stored as an ISO string in the form state
              field.onChange(newValue ? newValue.toISOString() : null)
            }}
            slotProps={{
              textField: {
                fullWidth: true,
                error: !!error,
                helperText: error ? error.message : null,
              },
            }}
            label={label}
            disabled={disabled}
          />
        </LocalizationProvider>
      )}
    />
  )
}

export default InputDate
