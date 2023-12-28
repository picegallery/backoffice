'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { LoginForm } from '@/types'

export const useLogin = () => {
  const schema = yup.object().shape({
    email: yup.string().required('Name is a required field'),
    password: yup.string().required('Password is a required field')
  })

  const { control, handleSubmit } = useForm<LoginForm>({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onSubmit',
    resolver: yupResolver(schema)
  })

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    console.log('data', data)
  }

  return { control, handleSubmit, onSubmit }
}
