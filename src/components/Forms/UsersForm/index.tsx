import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Input } from '../../../common/Input'
import { UserCreateDTO } from '../../../types/user'

const userSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone is required'),
  username: z.string().min(1, 'Username is required'),
  website: z.string().url('Invalid website URL').or(z.literal('')),
  address: z.object({
    street: z.string().min(1, 'Street is required'),
    suite: z.string().optional(),
    city: z.string().min(1, 'City is required'),
    zipcode: z.string().min(1, 'Zipcode is required')
  }),
  company: z.object({
    name: z.string().min(1, 'Company name is required'),
    catchPhrase: z.string().optional(),
    bs: z.string().optional()
  })
})

export const UserForm = ({ onCancel, onSubmit }: { onCancel: () => void; onSubmit: (data: UserCreateDTO) => void }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<UserCreateDTO>({
    resolver: zodResolver(userSchema)
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 h-[50dvh] overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Full Name"
          {...register('name')}
          error={errors.name?.message}
        />
        <Input
          label="Email"
        //   type="email"
          {...register('email')}
          error={errors.email?.message}
        />
        <Input
          label="Username"
          {...register('username')}
          error={errors.username?.message}
        />
        <Input
          label="Phone"
          {...register('phone')}
          error={errors.phone?.message}
        />
        <Input
          label="Website"
          {...register('website')}
          error={errors.website?.message}
        />
      </div>

      <div className="border-t pt-4">
        <h3 className="text-lg font-medium mb-4">Address Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Street"
            {...register('address.street')}
            error={errors.address?.street?.message}
          />
          <Input
            label="City"
            {...register('address.city')}
            error={errors.address?.city?.message}
          />
          <Input
            label="Zipcode"
            {...register('address.zipcode')}
            error={errors.address?.zipcode?.message}
          />
          <Input
            label="Suite"
            {...register('address.suite')}
            error={errors.address?.suite?.message}
          />
        </div>
      </div>

      <div className="border-t pt-4">
        <h3 className="text-lg font-medium mb-4">Company Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Company Name"
            {...register('company.name')}
            error={errors.company?.name?.message}
          />
          <Input
            label="Catch Phrase"
            {...register('company.catchPhrase')}
            error={errors.company?.catchPhrase?.message}
          />
          <Input
            label="BS"
            {...register('company.bs')}
            error={errors.company?.bs?.message}
          />
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-8">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Create User
        </button>
      </div>
    </form>
  )
}