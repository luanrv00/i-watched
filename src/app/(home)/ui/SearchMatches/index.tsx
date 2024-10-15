import type {WatchItemFullType} from '@/app/types/types'
import {SearchMatch} from '../SearchMatch'

export function SearchMatches({
  matchesList,
}: {
  matchesList: null | WatchItemFullType[]
}) {
  const areMatchesNotFound = matchesList?.length === 0

  if (areMatchesNotFound) {
    return <p>No results found.</p>
  }

  return (
    <ul className='mt-5 flex flex-col gap-3 md:flex-row md:flex-wrap'>
      {matchesList?.map((matchItem: WatchItemFullType) => (
        <SearchMatch key={matchItem.tmdbId} matchItem={matchItem} />
      ))}
    </ul>
  )
}
