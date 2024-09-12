'use client'
import {useEffect, useState} from 'react'
import {useDebounce} from 'use-debounce'
import {Input} from '@/app/ui'

export function SearchForm({onSearch}: {onSearch: (param: string) => void}) {
  const [inputValue, setInputValue] = useState<string>('')
  const [debouncedSearchQuery] = useDebounce(inputValue, 2000)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    if (!debouncedSearchQuery) {
      return
    }

    onSearch(debouncedSearchQuery)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchQuery])

  return (
    <form aria-label='form' onSubmit={onSubmit}>
      <div className='flex flex-col'>
        <label>Search for an Anime, TV Series or Movie</label>
        <Input
          type='text'
          placeholder='Type anything...'
          onChange={onChange}
          value={inputValue}
        />
      </div>
    </form>
  )
}
