'use client'
import {useState} from 'react'
import Image from 'next/image'
import {Button} from '@/app/ui'
import {postWatchedItem} from '@/app/services'
import type {WatchItemFullType} from '@/app/types/types'

export function SearchMatch({matchItem}: {matchItem: WatchItemFullType}) {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function onAdd() {
    setIsLoading(true)
    await postWatchedItem({
      tmdbId: matchItem.tmdbId,
      mediaType: matchItem.mediaType,
    })
    setIsLoading(false)
  }

  return (
    <li key={matchItem.tmdbId} className='flex flex-row border w-96'>
      <Image src={matchItem.posterUrl} width='100' height='150' alt='cover' />
      <div className='ml-2 w-full flex flex-col'>
        <p>{matchItem.title}</p>
        <p>{matchItem.releaseYear}</p>
        <p>{matchItem.mediaType}</p>
        {matchItem.seasonsCount && <p>seasons: {matchItem.seasonsCount}</p>}
        {matchItem.episodesCount && <p>episodes: {matchItem.episodesCount}</p>}
        <div className='self-end content-end grow m-2'>
          <Button onClick={onAdd} isLoading={isLoading}>
            Add
          </Button>
        </div>
      </div>
    </li>
  )
}
