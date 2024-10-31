'use client'

import {useState} from 'react'
import {SearchForm} from '../SearchForm'
import {SearchMatches} from '../SearchMatches'
import {search} from '@/app/services'
import {Spacer} from '@/app/ui'
import type {WatchItemType} from '@/app/types/types'

export function SearchContainer() {
  const [searchMatches, setSearchMatches] = useState<
    undefined | WatchItemType[]
  >()

  async function onSearch(searchTerm: string) {
    const searchMatches = await search(searchTerm)
    setSearchMatches(searchMatches)
  }

  return (
    <>
      <SearchForm onSearch={onSearch} />
      <Spacer />
      <SearchMatches matchesList={searchMatches} />
    </>
  )
}
