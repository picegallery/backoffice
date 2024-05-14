import SignInForm from '@/forms/SignIn/SignIn'
import { SignInPageStyled, FormContainerStyled, BackgroundImageStyled } from './SignIn.styled'

const SignInPage = () => {
  return (
    <SignInPageStyled container>
      <FormContainerStyled item xs={12} md={6}>
        <SignInForm />
      </FormContainerStyled>
      <BackgroundImageStyled
        item
        xs={12}
        md={6}
        style={{ backgroundImage: `url(/assets/signin.png)` }}
      ></BackgroundImageStyled>
    </SignInPageStyled>
  )
}

export default SignInPage
