'use client'
import {useEffect, useState} from 'react'
import {useDebounce} from 'use-debounce'

export function SearchForm({onSearch}: {onSearch: (param: string) => void}) {
  const [searchQuery, setSearchQuery] = useState<null | string>(null)
  const [debouncedSearchQuery] = useDebounce(searchQuery, 2000)

  function onChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setSearchQuery(e.target.value)
  }

  useEffect(() => {
    if (!debouncedSearchQuery) {
      return
    }

    onSearch(debouncedSearchQuery)
  }, [debouncedSearchQuery])

  return (
    <form aria-label='form'>
      <div className='flex flex-col'>
        <label>Search for an Anime, TV Series or Movie</label>
        <input type='text' placeholder='Type anything...' onChange={onChange} />
      </div>
    </form>
  )
}
