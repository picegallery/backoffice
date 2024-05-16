// src/effects/store/slices/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState } from '@/types'
import { postSignInAction } from '@/effects/actions'

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
  },
  extraReducers: (builder) => {
    // builder.addCase(postSignInAction.pending, (state) => {
    //   state.loading = true
    // })
    // builder.addCase(postSignInAction.fulfilled, (state, action) => {
    //   state.loading = false
    //   state.token = action.payload.token
    // })
    // builder.addCase(postSignInAction.rejected, (state, action) => {
    //   state.loading = false
    //   state.errorMessage = action.error.message ?? null
    // })
  }
})

export const { setLogged } = authSlice.actions
export const authReducer = authSlice.reducer
