import { useQuery } from '@tanstack/react-query'

// import SearchInput from './SearchInput'
// import ErrorState from './ErrorState'
import { useState } from 'react'
import { useUsers } from '../../api/users'
import { useDebounce } from '../../hooks/useDebounce'
import { SkeletonLoader } from '../../common/LoadingSkeleton'
import { UserTable } from '../Tables/UsersTable'

export const UserDashboard = () => {
  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' }>({
    key: 'name',
    direction: 'asc',
  })

  const { data, isLoading, isError } = useUsers(page, searchTerm)

  const handleSearch = useDebounce((term: string | undefined | any) => {
    setSearchTerm(term)
    setPage(1)
  }, 300)

  if (isLoading) return <SkeletonLoader />
//   if (isError) return <ErrorState />

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        {/* <SearchInput onSearch={handleSearch} /> */}
        {/* <CreateUserButton /> */}
      </div>
      
      <UserTable />
      
      {/* <Pagination
        currentPage={page}
        totalPages={data.totalPages}
        onPageChange={setPage}
      /> */}
    </div>
  )
}
