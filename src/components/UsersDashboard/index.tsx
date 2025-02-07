import { useMemo, useState } from 'react';
import { User } from '../../types/user';
import { useUsers } from '../../api/users';
import SearchInput from '../../common/SearcInput';
import { SkeletonLoader } from '../../common/LoadingSkeleton';
import UsersTable from '../Tables/UsersTable';
import { CreateUserButton } from './CreateUserButton';
import { Pagination } from '../Tables/Pagination';
import { EmptyState } from '../EmptyState';

export const UserDashboard = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<{
    key: keyof User;
    direction: 'asc' | 'desc';
  }>({
    key: 'name',
    direction: 'asc',
  });

  const { data: allUsers, isLoading, isError } = useUsers();

  const filteredUsers = useMemo(() => {
    if (!allUsers?.users) return [];

    return allUsers.users
      .filter((user) =>
        Object.values(user).some((value) =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      )
      .sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key])
          return sortConfig.direction === 'asc' ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key])
          return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
  }, [allUsers, searchTerm, sortConfig]);

  const handleSort = (key: keyof User) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const paginatedUsers = useMemo(() => {
    const startIndex = (page - 1) * 10;
    return filteredUsers.slice(startIndex, startIndex + 10);
  }, [filteredUsers, page]);

  const totalPages = Math.ceil(filteredUsers.length / 10);

  if (isLoading) return <SkeletonLoader />;
  if (isError) return <div>Error loading users</div>;

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-5">
        <SearchInput onSearch={setSearchTerm} />
        <CreateUserButton />
      </div>

      {paginatedUsers.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <UsersTable
            users={paginatedUsers}
            onSort={handleSort}
            sortConfig={sortConfig}
          />
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      )}
    </div>
  );
};
