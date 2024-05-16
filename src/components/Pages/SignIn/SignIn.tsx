import SignInForm from '@/forms/SignIn/SignIn'
import { SignInPageStyled, FormContainerStyled, BackgroundImageStyled } from './SignIn.styled'

const SignInPage = () => {
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
