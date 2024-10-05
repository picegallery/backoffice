import { User } from '../user'

export type Artist = {
  id: string
  artisticName: string
  email: string
  user: {
    firstName: string
    lastName: string
    email: string
  }
}

export interface ArtistFormValues {
  artisticName: string
  email: string
  user: {
    firstName: string
    lastName: string
    email: string
  }
}
