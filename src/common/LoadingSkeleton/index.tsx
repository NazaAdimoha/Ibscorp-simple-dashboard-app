import { motion } from 'framer-motion'

export const SkeletonLoader = () => (
  <div className="space-y-4 p-4">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="h-16 bg-gray-200 rounded-lg dark:bg-gray-700"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      />
    ))}
  </div>
)