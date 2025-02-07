
import { useState } from 'react'
import { User } from '../../types/user'
import { useUsers } from '../../api/users'
import SearchInput from '../../common/SearcInput'
import { SkeletonLoader } from '../../common/LoadingSkeleton'
import UsersTable from '../Tables/UsersTable'
import { CreateUserButton } from './CreateUserButton'
import { Pagination } from '../Tables/Pagination'



export const UserDashboard = () => {
  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortConfig, setSortConfig] = useState<{ key: keyof User; direction: 'asc' | 'desc' }>({
    key: 'name',
    direction: 'asc',
  })

  const { data, isLoading, isError } = useUsers(page, searchTerm, sortConfig)

  const handleSort = (key: keyof User) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }))
  }

  if (isLoading) return <SkeletonLoader />
  if (isError) return <div>Error loading users</div>

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <SearchInput onSearch={setSearchTerm} />
        <CreateUserButton />
      </div>
      
      <UsersTable
        users={data?.users || []}
        onSort={handleSort}
        sortConfig={sortConfig}
        onDelete={() => {}}
      />

      <Pagination
        currentPage={page}
        totalPages={data?.totalPages || 1}
        onPageChange={setPage}
      />
    </div>
  )
}