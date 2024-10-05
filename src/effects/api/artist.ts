import { Artist, ArtistFormValues } from '@/types'
import API from '../config/api'

export const fetchAllArtists = async (): Promise<Artist[]> => {
  return API<Artist[]>({
    method: 'GET',
    url: 'artists'
  })
}

export const fetchArtistById = async (id: string): Promise<Artist> => {
  return API<Artist>({
    method: 'GET',
    url: `artists/${id}`
  })
}

export const postArtist = async (form: ArtistFormValues): Promise<Artist> => {
  return API<Artist, any, ArtistFormValues>({
    method: 'POST',
    url: 'artists',
    data: form
  })
}
