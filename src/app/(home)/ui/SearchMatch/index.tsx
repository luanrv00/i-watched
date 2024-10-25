'use client'
import {useState} from 'react'
import {Button} from '@/app/ui'
import {postWatchedItem} from '@/app/services'
import type {WatchItemType} from '@/app/types/types'
import { WatchItemInfo } from '../WatchItemInfo'

export function SearchMatch({matchItem}: {matchItem: WatchItemType}) {
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
      <WatchItemInfo watchItem={matchItem}/>
      <div className='self-end content-end grow m-2'>
        <Button onClick={onAdd} isLoading={isLoading}>
          Add
        </Button>
      </div>
    </li>
  )
}
