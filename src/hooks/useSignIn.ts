'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { SignInForm } from '@/types'
import { postSignInAction } from '@/effects/actions'
import { useAppDispatch } from '@/effects/store'

export const useSignIn = () => {
  const dispatch = useAppDispatch()
  const schema = yup.object().shape({
    email: yup.string().required('Name is a required field'),
    password: yup
      .string()
      .required('Password is a required field')
      .min(8, 'Password must be at least 8 characters long')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/\d/, 'Password must contain at least one number')
      .matches(/[@$!%*?&#]/, 'Password must contain at least one special character')
  })

  const { control, handleSubmit } = useForm<SignInForm>({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onSubmit',
    resolver: yupResolver(schema)
  })

  const onSubmit: SubmitHandler<SignInForm> = (data) => {
    dispatch(postSignInAction(data))
  }

  return { control, handleSubmit, onSubmit }
}
