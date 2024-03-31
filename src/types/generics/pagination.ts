export interface Sort {
  sorted: boolean
  unsorted: boolean
  empty: boolean
}
export interface Pageable {
  sort: Sort
  offset: number
  pageNumber: number
  pageSize: number
  paged: boolean
  unpaged: boolean
}

export type PaginationDefault = PaginationParams
export interface Pagination<T> extends PaginationDefault {
  content: T[]
}

export interface PaginationObject<T> extends PaginationDefault {
  content: T
  pageable: Pageable
  totalPages: number
  totalElements: number
  last: boolean
  size: number
  sort: Sort
  numberOfElements: number
  number: number
  first: boolean
  empty: boolean
  search?: string
}

export interface PaginationParams {
  search?: string
  per_page?: number
  page?: number
  order?: 'asc' | 'desc'
  orderBy?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'price' | 'popularity' | 'rating'
  category?: number
  stock_status?: 'instock' | 'outofstock' | 'onbackorder'
}
