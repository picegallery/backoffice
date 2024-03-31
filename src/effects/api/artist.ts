import { Artist } from '@/types'
import API from '../config/api'

export const fetchAllArtists = async (): Promise<Artist[]> => {
  return API<Artist[]>({
    method: 'GET',
    url: 'artist'
  })
}
