import { createSlice } from '@reduxjs/toolkit'
import { ExhibitionState } from '@/types'
import { getExhibitions } from '@/effects/actions'

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
    builder.addCase(getExhibitions.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getExhibitions.fulfilled, (state, action) => {
      state.loading = false
      state.list = action.payload
    })
    builder.addCase(getExhibitions.rejected, (state, action) => {
      state.loading = false
      state.errorMessage = action.error.message ?? null
    })
  }
})

export const {} = exhibitionSlice.actions
export const exhibitionReducer = exhibitionSlice.reducer
