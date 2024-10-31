'use client'
import {useEffect, useState} from 'react'
import {getWatchedItemsWithDetails} from '@/app/services'
import type {WatchItemType} from '@/app/types/types'
import {WatchedTvSeries, WatchedMovies} from '..'
import {Spacer} from '@/app/ui'

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
