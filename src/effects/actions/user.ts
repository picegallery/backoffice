import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User } from '@/types'

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  const response = await axios.get<User[]>('/api/users')
  return response.data
})