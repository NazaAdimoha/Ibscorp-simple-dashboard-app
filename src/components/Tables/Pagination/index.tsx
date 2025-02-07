
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    return (
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border rounded-md disabled:opacity-50 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <ChevronLeft size={16} /> Previous
        </button>
        
        <span className="dark:text-white">
          Page {currentPage} of {totalPages}
        </span>
  
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border rounded-md disabled:opacity-50 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          Next <ChevronRight size={16} />
        </button>
      </div>
    )
  }