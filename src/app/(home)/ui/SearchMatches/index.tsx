import type {WatchItemType} from '@/app/types/types'
import {SearchMatch} from '../SearchMatch'

export function SearchMatches({
  matchesList,
}: {
  matchesList: null | WatchItemType[]
}) {
  const areMatchesNotFound = matchesList?.length === 0

  if (areMatchesNotFound) {
    return <p>No results found.</p>
  }

  return (
    <ul className='flex flex-col gap-3 md:flex-row md:flex-wrap'>
      {matchesList?.map((matchItem: WatchItemType) => (
        <SearchMatch key={matchItem.tmdbId} matchItem={matchItem} />
      ))}
    </ul>
  )
}
