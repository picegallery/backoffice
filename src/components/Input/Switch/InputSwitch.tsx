import { Control, Controller, FieldError, FieldValues, Path, RegisterOptions } from 'react-hook-form';
import { FormControl, FormControlLabel, FormHelperText, Switch } from '@mui/material';

interface FormInputControllerProps<TFieldsType extends FieldValues> {
  name: Path<TFieldsType>;
  defaultValue?: string;
  rules?: RegisterOptions;
  error?: FieldError;
  control: Control<TFieldsType>;
}

interface InputSwitchProps<TFieldsType extends FieldValues> extends FormInputControllerProps<TFieldsType> {
  label: string;
  disabled?: boolean;
}

const InputSwitch = <TFieldsType extends FieldValues>({
  name,
  control,
  label,
  disabled = false
}: InputSwitchProps<TFieldsType>) => {
  return (
    <FormControl component="fieldset">
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <FormControlLabel
              control={
                <Switch
                  {...field}
                  checked={!!field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                  disabled={disabled}
                />
              }
              label={label}
            />
            {error && <FormHelperText error>{error.message}</FormHelperText>}
          </>
        )}
      />
    </FormControl>
  );
};

export default InputSwitch