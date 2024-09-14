'use client'

import {useState} from 'react'
import {SearchForm} from '../SearchForm'
import {SearchMatches} from '../SearchMatches'
import type {WatchItemFullType} from '@/app/types/types'

export function SearchContainer() {
  const [searchMatches, setSearchMatches] = useState<
    null | WatchItemFullType[]
  >(null)

  async function onSearch(searchTerm: string) {
    const searchQueryEndpoint = `/api/search?searchTerm=${searchTerm}`
    await fetch(searchQueryEndpoint)
      .then(res => res.json())
      .then(res => setSearchMatches(res.data))
      .catch(err => console.log('---------------- err', err))
  }

  return (
    <>
      <SearchForm onSearch={onSearch} />
      <SearchMatches matchesList={searchMatches} />
    </>
  )
}
