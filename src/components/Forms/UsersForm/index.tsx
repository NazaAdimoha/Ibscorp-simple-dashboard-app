import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { useCreateUser } from '../../../api/users'
import { UserCreateDTO } from '../../../types/user'
import toast from 'react-hot-toast'


const userSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone is required'),
  username: z.string().min(1, 'Username is required'),
  website: z.string().min(1, 'Website is required'),
  address: z.object({
    street: z.string().min(1),
    city: z.string().min(1),
    zipcode: z.string().min(1),
  }),
  company: z.object({
    name: z.string().min(1),
  })
})

interface UserFormProps {
  onCancel: () => void
  onSubmitSuccess: () => void
}

export const UserForm = ({ onSubmitSuccess }: UserFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<UserCreateDTO>({
    resolver: zodResolver(userSchema)
  })

  const { mutate: createUser } = useCreateUser()

  const onSubmit = (data: UserCreateDTO) => {
    createUser(data, {
      onSuccess: () => {
        onSubmitSuccess()
        toast.success('User created successfully')
      }
    })
  }

  return (
<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
<div>
  <label className="block text-sm font-medium text-gray-700">Name</label>
  <input
    {...register('name', { required: 'Name is required' })}
    className={`mt-1 block w-full rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'} shadow-sm`}
  />
  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
</div>

<button type="submit" className="btn-primary">
  Create user
</button>
</form>
  )
}


