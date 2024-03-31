//import { signOutSuccess } from "@reducers";
import axios, { AxiosError } from 'axios'
import { ConfigType, API } from '@/types/generics/api'
import { configAPI } from './axiosInstance'
import { store } from '../store'

const getConfig = (config: ConfigType) => {
  switch (config) {
    default:
      return configAPI
  }
}
// s = success E = error D = body
async function API<S = any, E = any, D = any>(params: API<S, E, D>): Promise<S> {
  try {
    const token = store.getState().auth.token
    const headers = {
      ...params.headers,
      Authorization: `Bearer ${token}`
    }
    // this line will be remove when we have the all api's working, and only configAPI will be use
    const useConfig = getConfig(params.config || 'register')
    const config = {
      url: params.url,
      method: params.method,
      data: params.data,
      headers: headers,
      files: params.files
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const response = await useConfig(config)
    return response.data
  } catch (error: AxiosError | unknown) {
    // @ts-ignore
    if (error && error.response && error.response.status === 401) {
      //store.dispatch(signOutSuccess())
    }

    if (axios.isAxiosError(error)) {
      // If it is, you can access AxiosError specific properties
      if (error.response) {
        // AxiosError contains a response property with more details
        throw new Error(`Error fetching user data: ${error.response.status} - ${error.response.statusText}`)
      } else if (error.request) {
        // AxiosError contains a request property with more details
        throw new Error('No response received from server')
      } else {
        throw new Error(`Error fetching user data: ${error.message}`)
      }
    } else {
      // If it's not an AxiosError, you can handle it generically
      throw new Error(`Error fetching user data: ${String(error)}`)
    }
  }
}

export default API
