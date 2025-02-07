import axios from 'axios'
import { toast } from 'react-hot-toast'

export const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
})

// Response interceptors for error handling
apiClient.interceptors.response.use(
  response => response,
  error => {
    toast.error(`API Error: ${error.message}`)
    return Promise.reject(error)
  }
)