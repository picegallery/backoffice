import { fetchAllArtists } from '@/effects/api'
import { Artist, DefaultError } from '@/types'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getArtists = createAsyncThunk<Artist[], void, { rejectValue: DefaultError }>(
  'artist/getArtists',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchAllArtists()
      return response
    } catch (error) {
      return rejectWithValue(error as DefaultError)
    }
  }
)
