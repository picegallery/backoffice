import { Nullable } from './generic'

// remove this when you put more items and use the generic interface
export interface DefaultValuesState<T> {
  errorMessage: Nullable<string>
  successMessage?: Nullable<string>
  loading: boolean
  form?: T
  list: T[]
  size?: number
  page?: number
  totalPages?: number
  totalElements?: number
  search?: string
  deleted?: Nullable<boolean>
}
