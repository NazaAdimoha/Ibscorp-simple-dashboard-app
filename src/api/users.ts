import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient } from './client'
import { User, UserCreateDTO, UsersResponse, UserUpdateDTO } from '../types/user'
import toast from 'react-hot-toast'

const USER_CACHE_KEY = ['users']

export const useUsers = (page: number, search: string) => {
    return useQuery({
      queryKey: [...USER_CACHE_KEY, page, search],
      queryFn: async () => {
        const response = await apiClient.get<User[]>('/users', {
          params: { q: search, _page: page, _limit: 10 }
        })
        
        return {
          users: response.data,
          totalPages: Math.ceil(Number(response.headers['x-total-count']) / 10)
        } as UsersResponse
      }
    })
  }

  export const useCreateUser = () => {
    const queryClient = useQueryClient()
    return useMutation({
      mutationFn: (user: UserCreateDTO) => 
        apiClient.post<User>('/users', user),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: USER_CACHE_KEY })
        toast.success('User created successfully')
      }
    })
  }


  export const useUpdateUser = () => {
    const queryClient = useQueryClient()
    return useMutation({
      mutationFn: (user: UserUpdateDTO) => 
        apiClient.put<User>(`/users/${user.id}`, user),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: USER_CACHE_KEY })
        toast.success('User updated successfully')
      }
    })
  }