import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState } from '@/types'
import { postSignInAction } from '@/effects/actions'
import { handleErrorMessages } from '@/utils/handleErrorMessages'

const initialState: AuthState = {
  logged: true,
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
    },
    setAuthErrorMessage: (state, action: PayloadAction<string | null>) => {
      state.errorMessage = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(postSignInAction.pending, (state) => {
      state.loading = true
      state.errorMessage = null
    })
    builder.addCase(postSignInAction.fulfilled, (state, action) => {
      state.loading = false
      state.token = action.payload.token
      state.logged = true
      state.errorMessage = null
    })
    builder.addCase(postSignInAction.rejected, (state, action) => {
      state.loading = false
      state.errorMessage = handleErrorMessages(action.error.message) ?? null
    })
  }
})

export const { setLogged, setAuthErrorMessage } = authSlice.actions
export const authReducer = authSlice.reducer
