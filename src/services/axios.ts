import axios, { AxiosError } from "axios";

export const axiosInstance = axios.create({
    baseURL: '/api',
  });

  axiosInstance.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
  }, (error: AxiosError) => {
    console.log(error)
    return Promise.reject(error)
  })

  axiosInstance.interceptors.response.use(response => {
    return response
  }, (error: AxiosError) => {
    console.log(error)
    return Promise.reject(error)
  })