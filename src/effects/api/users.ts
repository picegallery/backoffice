import { User, UserFormValues, UserFormValuesToApi } from '@/types'
import API from '../config/api'

export const fetchAllUsers = async (): Promise<User[]> => {
  return API<User[]>({
    method: 'GET',
    url: 'users'
  })
}

export const fetchUserById = async (id: string): Promise<User> => {
  return API<User>({
    method: 'GET',
    url: `users/${id}`
  })
}

export const postUser = async (form: UserFormValuesToApi): Promise<User> => {
  return API<User, any, UserFormValuesToApi>({
    method: 'POST',
    url: 'users',
    data: form
  })
}

