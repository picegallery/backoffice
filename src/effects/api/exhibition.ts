import { Exhibition, ExhibitionFormValuesToApi } from '@/types'
import API from '../config/api'

export const fetchAllExhibitions = async (): Promise<Exhibition[]> => {
  return API<Exhibition[]>({
    method: 'GET',
    url: 'exhibitions'
  })
}

export const fetchExhibitionById = async (id: string): Promise<Exhibition> => {
  return API<Exhibition>({
    method: 'GET',
    url: `exhibitions/${id}`
  })
}

export const postExhibition = async (form: ExhibitionFormValuesToApi): Promise<Exhibition> => {
  return API<Exhibition, any, ExhibitionFormValuesToApi>({
    method: 'POST',
    url: 'exhibitions',
    data: form
  })
}