import { fetchAllExhibitions, fetchExhibitionById, postExhibition } from '@/effects/api'
import { Exhibition, DefaultError, ExhibitionFormValuesToApi } from '@/types'
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

export const getExhibitionAction = createAsyncThunk<Exhibition, string, { rejectValue: DefaultError }>(
  'exhibition/getExhibition',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetchExhibitionById(id)
      return response
    } catch (error) {
      return rejectWithValue(error as DefaultError)
    }
  }
)

export const postExhibitionAction = createAsyncThunk<Exhibition, ExhibitionFormValuesToApi, { rejectValue: DefaultError }>(
  'exhibition/postExhibition',
  async (form, { rejectWithValue }) => {
    try {
      const response = await postExhibition(form)
      return response
    } catch (error) {
      return rejectWithValue(error as DefaultError)
    }
  }
)
