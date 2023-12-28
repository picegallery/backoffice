'use client'
import Card from '@/components/Card/Card'
import { Grid, Typography } from '@/components'
import { FC } from 'react'
import InputText from '@/components/Input/Text/InputText'
import { useLogin } from '@/hooks'
import Button from '@/components/Button/Button'

const LoginForm: FC = () => {
  const { control, handleSubmit, onSubmit } = useLogin()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container padding={2} mt={5} alignContent={'center'} justifyContent={'center'}>
        <Grid item xs={12} sm={4}>
          <Card>
            <Grid container padding={3} rowSpacing={3}>
              <Grid item xs={12}>
                <Typography variant='h4'>Login</Typography>
              </Grid>

              <Grid item xs={12}>
                <InputText control={control} name='email' label='Email' />
              </Grid>

              <Grid item xs={12}>
                <InputText control={control} name='password' label='Password' type='password' />
              </Grid>

              <Grid item xs={12}>
                <Button fullWidth type='submit'>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </form>
  )
}

export default LoginForm
