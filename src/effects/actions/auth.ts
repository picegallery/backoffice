import { postSignIn } from '@/effects/api'
import { DefaultError, PayloadSignIn, SignInForm } from '@/types'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const postSignInAction = createAsyncThunk<PayloadSignIn, SignInForm, { rejectValue: DefaultError }>(
  'auth/signIn',
  async (signInForm, { rejectWithValue }) => {
    try {
      console.log('chega aqui')
      const response = await postSignIn(signInForm)
      return response
    } catch (error) {
      return rejectWithValue(error as DefaultError)
    }
  }
)
