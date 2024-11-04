'use client'
import {useState} from 'react'
import {postWatchedItem} from '@/app/services'
import {Button} from '@/app/ui/Button'
import {WatchItemInfo} from '../WatchItemInfo'
import type {WatchItemType} from '@/app/types/types'

export function SearchMatch({
  matchItem,
  handleAdd,
}: {
  matchItem: WatchItemType
  handleAdd: (tmddbId: number) => void
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function onAdd() {
    setIsLoading(true)
    await postWatchedItem({
      tmdbId: matchItem.tmdbId,
      mediaType: matchItem.mediaType,
    })
    handleAdd(matchItem.tmdbId)
    setIsLoading(false)
  }

  return (
    <li key={matchItem.tmdbId} className='flex flex-row border w-96'>
      <WatchItemInfo watchItem={matchItem} />
      <div className='self-end content-end grow m-2'>
        <Button onClick={onAdd} isLoading={isLoading}>
          Add
        </Button>
      </div>
    </li>
  )
}
