import axios, { AxiosInstance } from 'axios'

const apiUrl = process.env.NEXT_PUBLIC_URL_API

console.log('apiUrl', apiUrl)

const configAPI: AxiosInstance = axios.create({
  baseURL: `${apiUrl}`,
  timeout: 10000
})

export { configAPI }
