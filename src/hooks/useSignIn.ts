'use client'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { SignInFormType } from '@/types'

export const useSignIn = () => {
  const schema = yup.object().shape({
    email: yup.string().required('E-mail is a required field'),
    password: yup
      .string()
      .required('Password is a required field')
      .min(8, 'Password must be at least 8 characters long')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/\d/, 'Password must contain at least one number')
      .matches(/[@$!%*?&#]/, 'Password must contain at least one special character')
  })

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<SignInFormType>({
    defaultValues: {
      email: 'test12346@example.com',
      password: 'TPassword123@'
    },
    mode: 'onSubmit',
    resolver: yupResolver(schema)
  })

  return { control, handleSubmit, setError, errors }
}
