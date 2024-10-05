'use client'
import { FC, useEffect } from 'react'
import { Grid, Typography, Button, InputText, Logo } from '@/components'
import { useAuth, useSignIn } from '@/hooks'
import { LinkStyled } from '@/components/Pages/SignIn/SignIn.styled'
import { SubmitHandler, set } from 'react-hook-form'
import { postSignInAction } from '@/effects/actions'
import { useAppDispatch } from '@/effects/store'
import { SignInFormType } from '@/types'
import { setAuthErrorMessage } from '@/effects/store/slices'

const SignInForm: FC = () => {
  const dispatch = useAppDispatch()
  const { errorMessage, loading } = useAuth()
  const { control, handleSubmit } = useSignIn()
  const onSubmit: SubmitHandler<SignInFormType> = (data) => {
    dispatch(postSignInAction(data))
  }

  useEffect(() => {
    if (errorMessage !== null) {
      const timer = setTimeout(() => {
        dispatch(setAuthErrorMessage(null))
      }, 10000)
      return () => clearTimeout(timer)
    }
  }, [errorMessage, dispatch])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container padding={3} rowSpacing={3}>
        <Grid item xs={12} marginTop={5}>
          <Logo />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h4' textAlign={'center'}>
            Sign in
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <InputText control={control} name='email' label='Email' disabled={loading} />
        </Grid>

        <Grid item xs={12}>
          <InputText control={control} name='password' label='Password' type='password' disabled={loading} />
        </Grid>

        <Grid item xs={12}>
          <Button fullWidth type='submit' disabled={loading}>
            Sign in
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Typography variant='body2' color='error'>
            {errorMessage}
          </Typography>
        </Grid>

        <Grid item xs={12} marginTop={5} justifyContent={'center'} display={'flex'}>
          <LinkStyled href='/sign-up' passHref>
            New here? Sign up now
          </LinkStyled>
        </Grid>
      </Grid>
    </form>
  )
}

export default SignInForm
