//import { User } from '../users'

import { Nullable } from '../generics'

export enum Role {
  ADMIN = 'admin',
  STAFF = 'staff',
  CUSTOMER = 'customer',
  ARTIST = 'artist',
  SUPPLIER = 'supplier',
  ACCOUNTANT = 'accountant'
}

// todo create the user
export interface AuthState {
  logged: Nullable<any>
  token: Nullable<string>
  refreshToken: Nullable<string>
  errorMessage: Nullable<string>
  loading: boolean
  role: Nullable<Role>
}

export interface PayloadSignIn {
  token: string
}

export interface SignIn {
  email: string
  password: string
}
