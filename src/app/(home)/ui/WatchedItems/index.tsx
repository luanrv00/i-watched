'use clitn'
import {useEffect} from 'react'
import {getWatchedItemsWithDetails} from '@/app/services'
import type { WatchItemType } from '@/app/types/types'

export function WatchedItems() {
  useEffect(() => {
    fetchWatchedItems()
  }, [])

  async function fetchWatchedItems() {
    const watchedItems: {
      watchedMovies: WatchItemType[], 
      watchedTvSeries: WatchItemType[]
    } = await getWatchedItemsWithDetails()
    console.log('----------------watchedItems', watchedItems)
  }

  return null
}
