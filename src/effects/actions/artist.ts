import { fetchAllArtists, fetchArtistById, postArtist } from '@/effects/api'
import { Artist, DefaultError, ArtistFormValues } from '@/types'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getArtistsAction = createAsyncThunk<Artist[], void, { rejectValue: DefaultError }>(
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

export const getArtistAction = createAsyncThunk<Artist, string, { rejectValue: DefaultError }>(
  'artist/getArtist',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetchArtistById(id)
      return response
    } catch (error) {
      return rejectWithValue(error as DefaultError)
    }
  }
)

export const postArtistAction = createAsyncThunk<Artist, ArtistFormValues, { rejectValue: DefaultError }>(
  'artist/postArtist',
  async (form, { rejectWithValue }) => {
    try {
      const response = await postArtist(form)
      return response
    } catch (error) {
      return rejectWithValue(error as DefaultError)
    }
  }
)
