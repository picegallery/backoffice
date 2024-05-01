import { HTMLInputTypeAttribute } from 'react'
import { Control, Controller, FieldError, FieldValues, Path, RegisterOptions } from 'react-hook-form'
import { Select, MenuItem, FormControl, FormHelperText, InputLabel } from '@mui/material'

interface FormInputControllerProps<TFieldsType extends FieldValues> {
  name: Path<TFieldsType>
  defaultValue?: string
  rules?: RegisterOptions
  error?: FieldError
  control: Control<TFieldsType>
  value?: any
}

export type Item = {
  label: string
  value: string | number
}
interface InputSelectProps<TFieldsType extends FieldValues> extends FormInputControllerProps<TFieldsType> {
  label: string
  helperText?: string
  items: Item[]
  multiple?: boolean
}

const InputSelect = <TFieldsType extends FieldValues>({
  name,
  control,
  label,
  helperText,
  items = [],
  multiple = false
}: InputSelectProps<TFieldsType>) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={name}>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            labelId={name}
            label={label}
            multiple={multiple}
            {...field}
            value={field.value || []}
            renderValue={(selected) =>
              selected.map((value) => items.find((item) => item.value === value)?.label).join(', ')
            }
            onChange={(event) => {
              const value = event.target.value
              // On autofill we get a stringified value.
              field.onChange(typeof value === 'string' ? value.split(',') : value)
            }}
          >
            {items.map((item, itemIndex) => (
              <MenuItem value={item.value} key={itemIndex}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  )
}

export default InputSelect
