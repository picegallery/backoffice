'use client'
import { FC } from 'react'
import { Grid, Typography, Button, InputText, Logo } from '@/components'
import { useSignIn } from '@/hooks'
import { LinkStyled } from '@/components/Pages/SignIn/SignIn.styled'

const SignInForm: FC = () => {
  const { control, handleSubmit, onSubmit } = useSignIn()

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
          <InputText control={control} name='email' label='Email' />
        </Grid>

        <Grid item xs={12}>
          <InputText control={control} name='password' label='Password' type='password' />
        </Grid>

        <Grid item xs={12}>
          <Button fullWidth type='submit'>
            Sign in
          </Button>
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
