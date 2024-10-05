import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import type { API } from '@/types/generics/api'
import type { ConfigType } from '@/types'
import { configAPI } from './axiosInstance'
import { store } from '../store'
//import { signOutSuccess } from '@reducers'; // Uncomment if you have the sign-out reducer

// Utility to get the correct Axios instance based on config
const getConfig = (config: ConfigType) => {
  switch (config) {
    default:
      return configAPI
  }
}

// Generic API Function - S = success, E = error, D = body
async function API<S = any, E = any, D = any>(params: API<S, E, D>): Promise<S> {
  try {
    // Retrieve the authorization token from the Redux store
    const token = store.getState().auth.token
    const headers = {
      ...params.headers,
      Authorization: `Bearer ${token}`,
    }

    // Select the appropriate Axios instance based on the config
    const useConfig = getConfig(params.config || 'register')

    // Prepare the Axios configuration
    const config: AxiosRequestConfig = {
      url: params.url,
      method: params.method,
      data: params.data,
      headers: headers,
      files: params.files, // You may need to adjust this based on your backend API
    }

    // Make the API call and return the response data
    const response = await useConfig(config)
    return response.data

  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      // Axios-specific error handling
      const axiosError = error as AxiosError<E>

      // Check for 401 Unauthorized and handle global sign-out
      if (axiosError.response?.status === 401) {
        // Dispatch a sign-out action if needed
        // store.dispatch(signOutSuccess()) // Uncomment if you have a sign-out action
        throw new Error('Unauthorized access - please log in again')
      }

      // Check for specific status codes (e.g., 409 Conflict)
      if (axiosError.response) {
        const errorMessage = axiosError.response.data
        // @ts-ignore
          ? `${axiosError.response.data.message || 'Internal Server Error'}`
          : `Server responded with status ${axiosError.response.status}`
        throw new Error(errorMessage)
      }

      // No response received
      if (axiosError.request) {
        throw new Error('No response received from the server')
      }

      // Something else happened during the request
      throw new Error(`Request Error: ${axiosError.message}`)
    } else {
      // Handle unknown errors
      throw new Error(`Unexpected error: ${String(error)}`)
    }
  }
}

export default API
