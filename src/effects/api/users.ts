import { User } from '@/types'
import API from '../config/api'

export const fetchAllUsers = async (): Promise<User[]> => {
  return API<User[]>({
    method: 'GET',
    url: 'users'
  })
}