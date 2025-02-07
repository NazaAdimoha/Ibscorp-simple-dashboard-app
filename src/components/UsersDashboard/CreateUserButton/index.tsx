// components/CreateUserButton.tsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast'
import { useCreateUser } from '../../../api/users'
import { UserCreateDTO } from '../../../types/user'
import { UserForm } from '../../Forms/UsersForm'
import { XOctagonIcon } from 'lucide-react'

export const CreateUserButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { mutateAsync: createUser } = useCreateUser()

  const handleSubmit = async (data: UserCreateDTO) => {
    try {
      await createUser(data)
      toast.success('User created successfully!')
      setIsOpen(false)
    } catch (error) {
      toast.error('Failed to create user')
    }
  }

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        onClick={() => setIsOpen(true)}
      >
        Create New User
      </motion.button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-2xl"
          >
            <div className='flex items-center justify-between w-full'>
                <h2 className="text-2xl font-bold mb-6 dark:text-white">Create New User</h2>
                <span className=''>
                    <XOctagonIcon className='w-6 h-6 cursor-pointer flex justify-center items-center' onClick={() => setIsOpen(false)} />
                </span>
            </div>

            <UserForm
              onSubmit={handleSubmit}
              onCancel={() => setIsOpen(false)}
            />
          </motion.div>
        </div>
      )}
    </>
  )
}