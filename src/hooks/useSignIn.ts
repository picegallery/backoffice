'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { SignInForm } from '@/types'

export const useSignIn = () => {
  const schema = yup.object().shape({
    email: yup.string().required('Name is a required field'),
    password: yup.string().required('Password is a required field')
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
    console.log('data', data)
  }

  return { control, handleSubmit, onSubmit }
}
