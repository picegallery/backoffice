import { HTMLInputTypeAttribute } from 'react'
import { Control, Controller, FieldError, FieldValues, Path, RegisterOptions } from 'react-hook-form'
import { InputTextareaStyled, Textarea } from './InputTextarea.styled'

interface FormInputControllerProps<TFieldsType extends FieldValues> {
  name: Path<TFieldsType>
  defaultValue?: string
  rules?: RegisterOptions
  error?: FieldError
  control: Control<TFieldsType>
  minRows?: number
}

interface InputTextareaProps<TFieldsType extends FieldValues> extends FormInputControllerProps<TFieldsType> {
  label: string
  type?: HTMLInputTypeAttribute
  disabled?: boolean
}

const InputTextarea = <TFieldsType extends FieldValues>({
  name,
  control,
  label,
  minRows = 10,
  disabled = false
}: InputTextareaProps<TFieldsType>) => {
  return (
    <InputTextareaStyled>
      <Controller
        name={name}
        control={control}
        disabled={disabled}
        render={({ field, fieldState: { error } }) => (
          <Textarea aria-label={label} minRows={minRows} placeholder={label} name={name} disabled={field.disabled} />
        )}
      />
    </InputTextareaStyled>
  )
}

export default InputTextarea
