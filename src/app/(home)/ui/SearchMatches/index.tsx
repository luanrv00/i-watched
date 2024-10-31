'use client'
import {useEffect, useState} from 'react'
import type {WatchItemType} from '@/app/types/types'
import {SearchMatch} from '../SearchMatch'

export function SearchMatches({
  matchesList,
}: {
  matchesList: undefined | WatchItemType[]
}) {
  const [matches, setMatches] = useState<undefined | WatchItemType[]>()
  const areMatchesNotFound = matchesList?.length === 0

  useEffect(() => {
    setMatches(matchesList)
  }, [matchesList])

  if (areMatchesNotFound) {
    return <p>No results found.</p>
  }

  function onAdd(tmddbId: number) {
    setMatches((matches: undefined | WatchItemType[]) =>
      matches?.filter((match: WatchItemType) => match.tmdbId !== tmddbId),
    )
  }

  return (
    <ul className='flex flex-col gap-3 md:flex-row md:flex-wrap'>
      {matches?.map((matchItem: WatchItemType) => (
        <SearchMatch
          key={matchItem.tmdbId}
          matchItem={matchItem}
          handleAdd={onAdd}
        />
      ))}
    </ul>
  )
}
