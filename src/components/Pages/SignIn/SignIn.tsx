'use client'
import SignInForm from '@/forms/SignIn/SignIn'
import { SignInPageStyled, FormContainerStyled, BackgroundImageStyled } from './SignIn.styled'
import { useEffect } from 'react'
import { useAuth } from '@/hooks'
import { useRouter } from 'next/navigation'

const SignInPage = () => {
  const { logged } = useAuth()
  const { replace } = useRouter()

  useEffect(() => {
    if (logged) {
      replace('/dashboard')
    }
  }, [logged, replace])

  return (
    <SignInPageStyled container>
      <FormContainerStyled item xs={12} md={6} justifyContent={'center'}>
        <SignInForm />
      </FormContainerStyled>
      <BackgroundImageStyled item xs={12} md={6} />
    </SignInPageStyled>
  )
}

export default SignInPage
