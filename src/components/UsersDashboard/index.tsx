// components/UserDashboard.tsx
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { User } from '../../types/user'
import { useUsers } from '../../api/users'
import SearchInput from '../../common/SearcInput'
import { SkeletonLoader } from '../../common/LoadingSkeleton'
import UsersTable from '../Tables/UsersTable'



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
      <div className="mb-6">
        <SearchInput onSearch={setSearchTerm} />
      </div>
      
      <UsersTable
        users={data?.users || []}
        onSort={handleSort}
        sortConfig={sortConfig}
        onDelete={() => {}}
      />

      {/* <Pagination
        currentPage={page}
        totalPages={data?.totalPages || 1}
        onPageChange={setPage}
      /> */}
    </div>
  )
}