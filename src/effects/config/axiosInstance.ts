import axios, { AxiosInstance } from 'axios'

const apiUrl = process.env.REACT_APP_URL_API
const apiAnalyticsUrl = process.env.REACT_APP_URL_ANALYTICS_API

const configAPI: AxiosInstance = axios.create({
  baseURL: `${apiUrl}`,
  timeout: 10000
})

const configAnalyticsAPI: AxiosInstance = axios.create({
  baseURL: `${apiAnalyticsUrl}`,
  timeout: 100000
})

export { configAPI, configAnalyticsAPI }
