import { Exhibition } from '@/types'
import API from '../config/api'

export const fetchAllExhibitions = async (): Promise<Exhibition[]> => {
  return API<Exhibition[]>({
    method: 'GET',
    url: 'exhibitions'
  })
}
