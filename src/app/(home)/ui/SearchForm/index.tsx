'use client'
import {useEffect, useState} from 'react'
import {useDebounce} from 'use-debounce'
import {Input} from '@/app/ui'

export function SearchForm({onSearch}: {onSearch: (param: string) => void}) {
  const [searchQuery, setSearchQuery] = useState<null | string>(null)
  const [debouncedSearchQuery] = useDebounce(searchQuery, 2000)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

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
    <form aria-label='form' onSubmit={onSubmit}>
      <div className='flex flex-col'>
        <label>Search for an Anime, TV Series or Movie</label>
        <Input type='text' placeholder='Type anything...' onChange={onChange} />
      </div>
    </form>
  )
}
