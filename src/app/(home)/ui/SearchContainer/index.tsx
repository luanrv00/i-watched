'use client'

import {useState} from 'react'
import {SearchForm} from '../SearchForm'
import {SearchMatches} from '../SearchMatches'
import {search} from '@/app/services'
import type {WatchItemType} from '@/app/types/types'
import { Spacer } from '@/app/ui'

export function SearchContainer() {
  const [searchMatches, setSearchMatches] = useState<
    null | WatchItemType[]
  >(null)

  async function onSearch(searchTerm: string) {
    const searchMatches = await search(searchTerm)
    setSearchMatches(searchMatches)
  }

  return (
    <>
      <SearchForm onSearch={onSearch} />
      <Spacer/>
      <SearchMatches matchesList={searchMatches} />
    </>
  )
}
