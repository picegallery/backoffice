import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '@/types'
import { getUsers } from '@/effects/actions'

interface UsersState {
  list: User[]
  loading: boolean
  errorMessage: string | null
}

const initialState: UsersState = {
  list: [],
  loading: false,
  errorMessage: null
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true
        state.errorMessage = null
      })
      .addCase(getUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.list = action.payload
        state.loading = false
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false
        state.errorMessage = action.error.message || 'Failed to load users'
      })
  }
})

export const usersReducer = usersSlice.reducer