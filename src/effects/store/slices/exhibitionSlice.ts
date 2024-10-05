import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Exhibition, ExhibitionState, ExhibitionType } from '@/types'
import { getExhibitionAction, getExhibitionsAction, postExhibitionAction } from '@/effects/actions'
import dayjs from 'dayjs'

const nowDate = dayjs().format('DD/MM/YYYY')
export const exhibitionInitialState: ExhibitionState = {
  errorMessage: null,
  list: [],
  loading: false,
  form: {
    id: "new", description: "", title: "", exhibitionType: ExhibitionType.HYBRID, startDate: nowDate, endDate: nowDate,
    bannerUrl: ''
  },
  resetForm: false
}

export const exhibitionSlice = createSlice({
  name: 'exhibition',
  initialState: exhibitionInitialState,
  reducers: { 
    setExhibitionErrorMessage: (state, action: PayloadAction<string | null>) => {
    state.errorMessage = action.payload
  },
  setExhibitionSuccessMessage: (state, action: PayloadAction<string | null>) => {
    state.successMessage = action.payload
  },
  resetExhibitionForm: (state) => {
    state.form = exhibitionInitialState.form
  },
  setExhibitionResetForm: (state, action: PayloadAction<boolean | null>) => {
    state.resetForm = action.payload
  },},
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
    .addCase(getExhibitionAction.pending, (state) => {
      state.loading = true
      state.errorMessage = null
      state.resetForm = true
    })
    .addCase(getExhibitionAction.fulfilled, (state, action: PayloadAction<Exhibition>) => {
      state.form = action.payload
      state.loading = false
    })
    .addCase(getExhibitionAction.rejected, (state, action) => {
      state.loading = false
      state.errorMessage = action.error.message || 'Failed to load exhibition'
    })
    .addCase(postExhibitionAction.pending, (state) => {
      state.loading = true
      state.errorMessage = null
    })
    .addCase(postExhibitionAction.fulfilled, (state, action) => {
      state.loading = false
      state.successMessage = 'exhibition saved'
      state.form = action.payload
    })
    .addCase(postExhibitionAction.rejected, (state, action) => {
      state.loading = false        
      state.errorMessage = action.payload?.message  || 'Failed to save user'
    })
  }
})

export const {setExhibitionErrorMessage, setExhibitionResetForm, setExhibitionSuccessMessage, resetExhibitionForm} = exhibitionSlice.actions
export const exhibitionReducer = exhibitionSlice.reducer
