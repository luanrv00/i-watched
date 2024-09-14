import Image from 'next/image'
import {Button} from '@/app/ui'
import type {WatchItemFullType} from '@/app/types/types'

export function SearchMatches({
  matchesList,
}: {
  matchesList: null | WatchItemFullType[]
}) {
  async function onAdd() {
    await fetch('/api/watched')
  }

  if (!matchesList) {
    return
  }

  return (
    <ul className='mt-5 flex flex-col gap-3 md:flex-row md:flex-wrap'>
      {matchesList?.map((matchItem: WatchItemFullType) => (
        <li key={matchItem.tmdbId} className='flex flex-row border w-96'>
          <Image
            src={matchItem.posterUrl}
            width='100'
            height='150'
            alt='cover'
          />
          <div className='ml-2 w-full flex flex-col'>
            <p>{matchItem.title}</p>
            <p>{matchItem.releaseYear}</p>
            {matchItem.seasonsCount && <p>seasons: {matchItem.seasonsCount}</p>}
            {matchItem.episodesCount && (
              <p>episodes: {matchItem.episodesCount}</p>
            )}
            <div className='self-end content-end grow m-2'>
              <Button onClick={onAdd}>Add</Button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
