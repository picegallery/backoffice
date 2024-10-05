import { createSlice } from '@reduxjs/toolkit'
import { ExhibitionState } from '@/types'
import { getExhibitionsAction } from '@/effects/actions'

const initialState: ExhibitionState = {
  errorMessage: null,
  list: [],
  loading: false
}

export const exhibitionSlice = createSlice({
  name: 'exhibition',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getExhibitionsAction.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getExhibitionsAction.fulfilled, (state, action) => {
      state.loading = false
      state.list = action.payload
    })
    builder.addCase(getExhibitionsAction.rejected, (state, action) => {
      state.loading = false
      state.errorMessage = action.error.message ?? null
    })
  }
})

export const {} = exhibitionSlice.actions
export const exhibitionReducer = exhibitionSlice.reducer
