'use clitn'
import {useEffect, useState} from 'react'
import {getWatchedItemsWithDetails} from '@/app/services'
import type { WatchItemType } from '@/app/types/types'

export type WatchedItemsType = {
  watchedMovies: WatchItemType[], 
  watchedTvSeries: WatchItemType[]
}

export function WatchedItems() {
  const [watchedItems, setWatchedItems] = useState<null|WatchedItemsType>(null)

  useEffect(() => {
    fetchWatchedItems()
  }, [])

  async function fetchWatchedItems() {
    const watchedItems: WatchedItemsType = await getWatchedItemsWithDetails()
    setWatchedItems(watchedItems)
    //console.log('----------------watchedItems', watchedItems)
  }

  if(!watchedItems) {
    return null
    //return (
    //  <p>Add watched TV Series</p>
    //)
  }

  return (
    <>
      <div>
        <h2>Watched TV Series</h2>
        <ul>
          {watchedItems.watchedTvSeries.map((watchedTVSeries: WatchItemType) => (
            <li key={watchedTVSeries.tmdbId}>{watchedTVSeries.title}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Watched Movies</h2>
        <ul>
          {watchedItems.watchedMovies.map((watchedMovie: WatchItemType) => (
            <li key={watchedMovie.tmdbId}>{watchedMovie.title}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
