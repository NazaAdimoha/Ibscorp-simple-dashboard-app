import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import { useUser } from '../../../api/users';
import { SkeletonLoader } from '../../../common/LoadingSkeleton';
import { ArrowLeftCircleIcon } from 'lucide-react';


const UserDetails = () => {
  const { id } = useParams()
  const { data: user, isLoading } = useUser(Number(id))

  if (isLoading) return <SkeletonLoader />

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow"
    >
      <motion.div
        className='flex items-center gap-4 mb-3'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <ArrowLeftCircleIcon className='w-6 h-6 cursor-pointer' onClick={() => window.history.back()} />
      </motion.div>

      <div className="space-y-4">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
        >
          <h2 className="text-2xl font-bold dark:text-white">{user?.name}</h2>
          <p className="text-gray-600 dark:text-gray-300">{user?.email}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div whileHover={{ scale: 1.01 }} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-semibold mb-2 dark:text-white">Contact Information</h3>
            <p className="dark:text-gray-300">Phone: {user?.phone}</p>
            <p className="dark:text-gray-300">Website: {user?.website}</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.01 }} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-semibold mb-2 dark:text-white">Address</h3>
            <p className="dark:text-gray-300">{user?.address.street}</p>
            <p className="dark:text-gray-300">{user?.address.city}, {user?.address.zipcode}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
};

export default UserDetails