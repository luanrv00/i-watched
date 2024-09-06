'use client'
import {useEffect, useState} from 'react'
import {useRouter, usePathname} from 'next/navigation'
import {useDebounce} from 'use-debounce'

export function SearchForm() {
  const [searchQuery, setSearchQuery] = useState<null | string>(null)
  const [debouncedSearchQuery] = useDebounce(searchQuery, 2000)
  const router = useRouter()
  const pathname = usePathname()

  function onChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setSearchQuery(e.target.value)
  }

  useEffect(() => {
    if (!debouncedSearchQuery) {
      return
    }

    const searchParams = new URLSearchParams({
      searchQuery: debouncedSearchQuery,
    })

    const searchQueryURL = `${pathname}?${searchParams}`
    router.replace(searchQueryURL)
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
