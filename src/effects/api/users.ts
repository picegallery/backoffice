import { User } from '@/types'
import API from '../config/api'

export const fetchAllArtists = async (): Promise<User[]> => {
  return API<User[]>({
    method: 'GET',
    url: 'users'
  })
}
