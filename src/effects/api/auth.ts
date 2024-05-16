import { PayloadSignIn, SignInForm } from '@/types'
import API from '../config/api'

export const postSignIn = async (signInForm: SignInForm): Promise<PayloadSignIn> => {
  return API<PayloadSignIn, any, SignInForm>({
    method: 'POST',
    url: '/auth/sign-in',
    data: signInForm
  })
}
