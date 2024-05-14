import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AuthState } from '@/types'

const initialState: AuthState = {
  logged: false,
  errorMessage: null,
  list: [],
  loading: false,
  refreshToken: null,
  token: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogged: (state, action: PayloadAction<boolean>) => {
      state.logged = action.payload
    }
  }
})

export const { setLogged } = authSlice.actions
export const authReducer = authSlice.reducer
