import type {WatchItemType} from '@/app/types/types'

export function SearchMatches({
  matchesList,
}: {
  matchesList: null | WatchItemType[]
}) {
  if (!matchesList) {
    return
  }

  return (
    <>
      {matchesList?.map((matchItem: WatchItemType) => (
        <div key={matchItem.tmdb_id}>
          <p>title: {matchItem.title}</p>
        </div>
      ))}
    </>
  )
}
