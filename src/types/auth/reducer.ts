//import { User } from '../users'

import { DefaultValuesState, Nullable } from '../generics'

// todo create the user
export interface AuthState extends DefaultValuesState<any> {
  logged: Nullable<any>
  token: Nullable<string>
  refreshToken: Nullable<string>
}

export interface PayloadSignIn {
  user: any
  token: string
  refreshToken: string
}

export interface SignIn {
  email: string
  password: string
}
