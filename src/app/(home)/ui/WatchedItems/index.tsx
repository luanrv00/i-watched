'use client'
import {useEffect, useState} from 'react'
import {getWatchedItemsWithDetails} from '@/app/services'
import {Spacer} from '@/app/ui/Spacer'
import {WatchedTvSeries} from '../WatchedTvSeries'
import {WatchedMovies} from '../WatchedMovies'
import type {WatchItemType} from '@/app/types/types'

export type WatchedItemsType = {
  watchedMovies: WatchItemType[]
  watchedTvSeries: WatchItemType[]
}

export function WatchedItems() {
  const [watchedItems, setWatchedItems] = useState<null | WatchedItemsType>(
    null,
  )

  useEffect(() => {
    fetchWatchedItems()
  }, [])

  async function fetchWatchedItems() {
    const watchedItems: WatchedItemsType = await getWatchedItemsWithDetails()
    setWatchedItems(watchedItems)
  }

  if (!watchedItems) {
    return null
  }

  return (
    <>
      <WatchedTvSeries watchedItems={watchedItems.watchedTvSeries} />
      <Spacer />
      <WatchedMovies watchedItems={watchedItems.watchedMovies} />
    </>
  )
}
