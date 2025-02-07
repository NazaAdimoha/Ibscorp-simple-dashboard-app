import { motion } from 'framer-motion'

export const EmptyState = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="text-center py-12"
  >
    <div className="max-w-md mx-auto">
      <svg
        className="mx-auto h-24 w-24 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
        />
      </svg>
      <h3 className="mt-4 text-xl font-medium dark:text-white">No users found</h3>
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        Try adjusting your search or create a new user.
      </p>
    </div>
  </motion.div>
)