import { FormProvider, useForm } from 'react-hook-form'
import { FC, ReactNode } from 'react'
import { action } from '@storybook/addon-actions'

export const StorybookFormProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const methods = useForm()
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(action('[React Hooks Form] Submit'))}>{children}</form>
    </FormProvider>
  )
}
