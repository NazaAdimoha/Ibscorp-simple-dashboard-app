import { motion } from 'framer-motion'

export const SkeletonLoader = () => (
  <div className="space-y-4">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="h-16 bg-gray-100 rounded-lg"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
    ))}
  </div>
)