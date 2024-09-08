import Image from 'next/image'
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
    <div className='mt-5 flex flex-col gap-y-3'>
      {matchesList?.map((matchItem: WatchItemType) => (
        <div key={matchItem.tmdbId} className='flex flex-row'>
          <Image
            src={matchItem.posterUrl}
            width='100'
            height='150'
            alt='cover'
          />
          <div className='ml-2'>
            <p>{matchItem.title}</p>
            <p>{matchItem.releaseYear}</p>
            {matchItem.seasonsCount && <p>seasons: {matchItem.seasonsCount}</p>}
            {matchItem.episodesCount && (
              <p>episodes: {matchItem.episodesCount}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
