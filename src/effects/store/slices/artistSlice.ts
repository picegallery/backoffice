import { createSlice } from '@reduxjs/toolkit'
import { ArtistState } from '@/types'
import { getArtists } from '@/effects/actions'

const initialState: ArtistState = {
  errorMessage: null,
  list: [],
  loading: false
}

export const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArtists.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getArtists.fulfilled, (state, action) => {
      state.loading = false
      state.list = action.payload
    })
    builder.addCase(getArtists.rejected, (state, action) => {
      state.loading = false
      state.errorMessage = action.error.message ?? null
    })
  }
})

export const {} = artistSlice.actions
export const artistReducer = artistSlice.reducer
