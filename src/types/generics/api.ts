import { Method, AxiosError } from 'axios'

export type DefaultError = AxiosError
export type ConfigType = 'register' | 'analytics'
export interface API<S, E, D = any> {
  url: string
  method: Method
  data?: D
  headers?: any
  files?: any
  // beforeRequest?: () => void
  // successCallback: (data: S) => void
  // errorCallback: (error: E) => void
  config?: ConfigType
}

export enum AsyncStatus {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Failed = 'failed'
}
