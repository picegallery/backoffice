import { PayloadSignIn, SignInFormType } from '@/types'
import API from '../config/api'

export const postSignIn = async (signInForm: SignInFormType): Promise<PayloadSignIn> => {
  return API<PayloadSignIn, any, SignInFormType>({
    method: 'POST',
    url: '/auth/sign-in',
    data: signInForm
  })
}
