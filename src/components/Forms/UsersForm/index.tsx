// components/UserForm.tsx
import { useForm } from 'react-hook-form'
import { User } from '../../../types/user';


export const UserForm = ({ user, onSubmit }: { user?: User; onSubmit: (data: User) => void }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<User>({
    defaultValues: user || { name: '', email: '', phone: '' }
  })

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
        {user ? 'Update User' : 'Create User'}
      </button>
    </form>
  )
}