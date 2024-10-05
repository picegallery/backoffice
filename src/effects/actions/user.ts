import { createAsyncThunk } from '@reduxjs/toolkit'
import { DefaultError, User, UserFormValues, UserFormValuesToApi } from '@/types'
import { fetchAllUsers, fetchUserById, postUser } from '@/effects/api'

export const getUsersAction = createAsyncThunk<User[], void, { rejectValue: DefaultError }>(
  'user/getUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchAllUsers()
      return response
    } catch (error) {
      return rejectWithValue(error as DefaultError)
    }
  }
)

export const getUserAction = createAsyncThunk<User, string, { rejectValue: DefaultError }>(
  'user/getUser',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetchUserById(id)
      return response
    } catch (error) {
      return rejectWithValue(error as DefaultError)
    }
  }
)



export const postUserAction = createAsyncThunk<User, UserFormValuesToApi, { rejectValue: DefaultError }>(
  'user/postUser',
  async (form, { rejectWithValue }) => {
    try {
      const response = await postUser(form)
      return response
    } catch (error) {
      return rejectWithValue(error as DefaultError)
    }
  }
)
