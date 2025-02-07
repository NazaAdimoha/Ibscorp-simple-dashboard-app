import { useEffect, useState } from 'react'
import { useDebounce } from '../../hooks/useDebounce'

interface SearchInputProps {
  onSearch: (term: string) => void
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const [term, setTerm] = useState('')
  const debouncedTerm = useDebounce(term, 300)

  useEffect(() => {
    onSearch(debouncedTerm)
  }, [debouncedTerm, onSearch])

  return (
    <input
      type="text"
      placeholder="Search users..."
      className="w-full max-w-md px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
      value={term}
      onChange={e => setTerm(e.target.value)}
    />
  )
}

export default SearchInput