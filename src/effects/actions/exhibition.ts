import { fetchAllExhibitions } from '@/effects/api'
import { Exhibition, DefaultError } from '@/types'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getExhibitionsAction = createAsyncThunk<Exhibition[], void, { rejectValue: DefaultError }>(
  'exhibition/getExhibitions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchAllExhibitions()
      return response
    } catch (error) {
      return rejectWithValue(error as DefaultError)
    }
  }
)
