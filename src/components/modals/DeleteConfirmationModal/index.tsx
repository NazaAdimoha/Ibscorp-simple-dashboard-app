import { motion } from 'framer-motion'
import { User } from '../../../types/user'

interface DeleteConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  user?: User
}

export const DeleteConfirmationModal = ({ 
  isOpen, 
  onClose, 
  onConfirm,
  user
}: DeleteConfirmationModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md"
      >
        <h3 className="text-xl font-bold mb-4 dark:text-white">
          Delete User
        </h3>
        
        {user && (
          <p className="mb-4 dark:text-gray-300">
            Are you sure you want to delete <span className="font-semibold">{user.name}</span>?
          </p>
        )}

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </motion.div>
    </div>
  )
}