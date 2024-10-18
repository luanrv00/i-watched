'use clitn'
import {getWatchedItemsWithDetails} from '@/app/services'
import {useEffect} from 'react'

export function WatchedItems() {
  useEffect(() => {
    fetchWatchedItems()
  }, [])

  async function fetchWatchedItems() {
    const watchedItems = await getWatchedItemsWithDetails()
    console.log('----------------watchedItems', watchedItems)
  }

  return null
}
