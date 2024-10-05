import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Artist, ArtistState } from '@/types'
import { getArtistsAction, getArtistAction, postArtistAction } from '@/effects/actions'

const initialState: ArtistState = {
  list: [],
  loading: false,
  errorMessage: null,
  successMessage: null,
  form: { email: '', artisticName: '', user: { firstName: '', lastName: '', email: '' } },
  resetForm: null
}

export const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {
    setArtistErrorMessage: (state, action: PayloadAction<string | null>) => {
      state.errorMessage = action.payload
    },
    setArtistSuccessMessage: (state, action: PayloadAction<string | null>) => {
      state.successMessage = action.payload
    },
    resetArtistForm: (state) => {
      state.form = initialState.form
    },
    setArtistResetForm: (state, action: PayloadAction<boolean | null>) => {
      state.resetForm = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getArtistsAction.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getArtistsAction.fulfilled, (state, action) => {
      state.loading = false
      state.list = action.payload
    })
    builder
      .addCase(getArtistsAction.rejected, (state, action) => {
        state.loading = false
        state.errorMessage = action.error.message ?? null
      })
      .addCase(getArtistAction.pending, (state) => {
        state.loading = true
        state.errorMessage = null
        state.form = initialState.form
        state.resetForm = null
      })
      .addCase(getArtistAction.fulfilled, (state, action: PayloadAction<Artist>) => {
        state.form = action.payload
        state.loading = false
        state.resetForm = true
      })
      .addCase(getArtistAction.rejected, (state, action) => {
        state.loading = false
        state.errorMessage = action.error.message || 'Failed to load artist'
      })
      .addCase(postArtistAction.pending, (state) => {
        state.loading = true
        state.errorMessage = null
      })
      .addCase(postArtistAction.fulfilled, (state, action) => {
        state.loading = false
        state.successMessage = 'artist saved'
        state.form = action.payload
      })
      .addCase(postArtistAction.rejected, (state, action) => {
        state.loading = false
        state.errorMessage = action.payload?.message || 'Failed to save artist'
      })
  }
})

export const { setArtistErrorMessage, setArtistResetForm, setArtistSuccessMessage, resetArtistForm } =
  artistSlice.actions
export const artistReducer = artistSlice.reducer
