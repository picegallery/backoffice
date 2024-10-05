import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DefaultValuesState, User } from '@/types'
import { getUserAction, getUsersAction, postUserAction } from '@/effects/actions'

interface UsersState extends DefaultValuesState<User>{}

const initialState: UsersState = {
  list: [],
  loading: false,
  errorMessage: null,
  successMessage: null,
  form: { email: '', lastName: '', firstName: '', id: 'new', password: 'password', userType: 'customer' },
  resetForm: null
}

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserErrorMessage: (state, action: PayloadAction<string | null>) => {
      state.errorMessage = action.payload
    },
    setUserSuccessMessage: (state, action: PayloadAction<string | null>) => {
      state.successMessage = action.payload
    },
    resetUserForm: (state) => {
      state.form = initialState.form
    },
    setUserResetForm: (state, action: PayloadAction<boolean | null>) => {
      state.resetForm = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersAction.pending, (state) => {
        state.loading = true
        state.errorMessage = null
      })
      .addCase(getUsersAction.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.list = action.payload
        state.loading = false
      })
      .addCase(getUsersAction.rejected, (state, action) => {
        state.loading = false
        state.errorMessage = action.error.message || 'Failed to load users'
      })
      .addCase(getUserAction.pending, (state) => {
        state.loading = true
        state.errorMessage = null
        state.form = initialState.form
        state.resetForm = null
      })
      .addCase(getUserAction.fulfilled, (state, action: PayloadAction<User>) => {
        state.form = action.payload
        state.loading = false
        state.resetForm = true
      })
      .addCase(getUserAction.rejected, (state, action) => {
        state.loading = false
        state.errorMessage = action.error.message || 'Failed to load user'
      })
      .addCase(postUserAction.pending, (state) => {
        state.loading = true
        state.errorMessage = null
      })
      .addCase(postUserAction.fulfilled, (state, action) => {
        state.loading = false
        state.successMessage = 'User saved'
        state.form = action.payload
      })
      .addCase(postUserAction.rejected, (state, action) => {
        state.loading = false        
        state.errorMessage = action.payload?.message  || 'Failed to save user'
      })
  }
})

export const { setUserErrorMessage, setUserSuccessMessage, resetUserForm, setUserResetForm } = usersSlice.actions
export const usersReducer = usersSlice.reducer