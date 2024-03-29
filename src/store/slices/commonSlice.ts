import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CommonState {
  currentTitle: string
}

const initialState: CommonState = {
  currentTitle: ''
}

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setCurrentTitle: (state, action: PayloadAction<string>) => {
      state.currentTitle = action.payload
    }
  }
})

export const { setCurrentTitle } = commonSlice.actions
export const commonReducer = commonSlice.reducer
