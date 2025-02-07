export interface User {
    id: number
    name: string
    email: string
    phone: string
    username: string
    website: string
    company: {
      name: string
      catchPhrase: string
      bs: string
    }
    address: {
      street: string
      suite: string
      city: string
      zipcode: string
    }
  }

export interface UsersResponse {
    users: User[]
    totalPages: number
  }
  
  export type UserCreateDTO = Omit<User, 'id'>
  export type UserUpdateDTO = Partial<UserCreateDTO>