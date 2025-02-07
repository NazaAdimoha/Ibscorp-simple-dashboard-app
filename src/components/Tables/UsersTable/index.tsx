// components/UsersTable.tsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlinePencil, HiOutlineTrash, HiOutlineEye } from 'react-icons/hi'
import { useDeleteUser } from '../../../api/users'
import { User } from '../../../types/user'


interface UsersTableProps {
  users: User[]
  onSort: (key: keyof User) => void
  onDelete: (id: number) => void
  sortConfig: { key: string; direction: 'asc' | 'desc' }
}

const UsersTable = ({ users, onSort, onDelete, sortConfig }: UsersTableProps) => {
  const [isMobile] = useState(window.innerWidth < 768)
  const { mutate: deleteUser } = useDeleteUser()

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      deleteUser(id)
    }
  }

  const MobileCard = ({ user }: { user: User }) => (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium text-black dark:text-white">{user.name}</h3>
        <div className="flex gap-2">
          <Link to={`/users/${user.id}`} className="text-blue-500 hover:text-blue-700">
            <HiOutlineEye />
          </Link>
          <Link to={`/users/edit/${user.id}`} className="text-green-500 hover:text-green-700">
            <HiOutlinePencil />
          </Link>
          <button onClick={() => handleDelete(user.id)} className="text-red-500 hover:text-red-700">
            <HiOutlineTrash />
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300">{user.email}</p>
      <p className="text-sm text-gray-600 dark:text-gray-300">{user.phone}</p>
    </div>
  )

  return isMobile ? (
    <div className="lg:hidden">
      {users.map(user => (
        <MobileCard key={user.id} user={user} />
      ))}
    </div>
  ) : (
    <table className="hidden lg:table w-full rounded-lg overflow-hidden shadow-lg">
      <thead className="bg-gray-100 dark:bg-gray-700">
        <tr>
          {['name', 'email', 'phone', 'username', 'actions'].map(key => (
            <th
              key={key}
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer"
              onClick={() => key !== 'actions' && onSort(key as keyof User)}
            >
              {key}
              {sortConfig.key === key && (
                <span className="ml-1">
                  {sortConfig.direction === 'asc' ? '↑' : '↓'}
                </span>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
        {users.map(user => (
          <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
            <td className="px-6 py-4 whitespace-nowrap dark:text-white">{user.name}</td>
            <td className="px-6 py-4 whitespace-nowrap dark:text-white">{user.email}</td>
            <td className="px-6 py-4 whitespace-nowrap dark:text-white">{user.phone}</td>
            <td className="px-6 py-4 whitespace-nowrap dark:text-white">{user.username}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex gap-2">
                <Link to={`/users/${user.id}`} className="text-blue-500 hover:text-blue-700">
                  <HiOutlineEye />
                </Link>
                <Link to={`/users/edit/${user.id}`} className="text-green-500 hover:text-green-700">
                  <HiOutlinePencil />
                </Link>
                <button onClick={() => handleDelete(user.id)} className="text-red-500 hover:text-red-700">
                  <HiOutlineTrash />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UsersTable