import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from './client';
import {
  User,
  UserCreateDTO,
  UsersResponse,
  UserUpdateDTO,
} from '../types/user';
import toast from 'react-hot-toast';

const USER_CACHE_KEY = ['users'];

export const useUsers = (
  page: number,
  search: string,
  sortConfig: { key: keyof User; direction: 'asc' | 'desc' },
) => {
  return useQuery({
    queryKey: [...USER_CACHE_KEY, page, search, sortConfig],
    queryFn: async () => {
      const response = await apiClient.get<User[]>('/users', {
        params: {
          _page: page,
          _limit: 10,
          q: search,
          _sort: sortConfig.key,
          _order: sortConfig.direction,
        },
      });
      return {
        users: response.data,
        totalPages: Math.ceil(Number(response.headers['x-total-count']) / 10),
      } as UsersResponse;
    },
  });
};

export const useUser = (id: number) => {
  return useQuery({
    queryKey: [...USER_CACHE_KEY, id],
    queryFn: async () => {
      const response = await apiClient.get<User>(`/users/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (user: UserCreateDTO) => apiClient.post<User>('/users', user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: USER_CACHE_KEY });
      toast.success('User created successfully');
    },
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (user: UserUpdateDTO) =>
      apiClient.put<User>(`/users/${user.id}`, user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: USER_CACHE_KEY });
      toast.success('User updated successfully');
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => apiClient.delete(`/users/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: USER_CACHE_KEY });
      toast.success('User deleted successfully');
    },
  });
};
