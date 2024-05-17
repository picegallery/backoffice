import { postSignIn } from '@/effects/api'
import { DefaultError, PayloadSignIn, SignInFormType } from '@/types'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const postSignInAction = createAsyncThunk<PayloadSignIn, SignInFormType, { rejectValue: DefaultError }>(
  'auth/signIn',
  async (signInForm, { rejectWithValue }) => {
    try {
      const response = await postSignIn(signInForm)
      return response
    } catch (error) {
      return rejectWithValue(error as DefaultError)
    }
  }
)
