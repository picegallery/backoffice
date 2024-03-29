import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  logged: boolean
}

const initialState: AuthState = {
  logged: true
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
