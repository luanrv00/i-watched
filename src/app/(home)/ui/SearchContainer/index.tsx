'use client'

import {useState} from 'react'
import {SearchForm} from '../SearchForm'
import {SearchMatches} from '../SearchMatches'
import {search} from '@/app/services'
import type {WatchItemFullType} from '@/app/types/types'

export function SearchContainer() {
  const [searchMatches, setSearchMatches] = useState<
    null | WatchItemFullType[]
  >(null)

  async function onSearch(searchTerm: string) {
    const searchMatches = await search(searchTerm)
    setSearchMatches(searchMatches)
  }

  return (
    <>
      <SearchForm onSearch={onSearch} />
      <SearchMatches matchesList={searchMatches} />
    </>
  )
}
