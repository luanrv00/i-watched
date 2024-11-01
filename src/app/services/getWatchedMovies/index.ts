import {getWatchedItems} from '../api'
import {getMovieDetails} from '../getMovieDetails'
import {buildWatchItem} from '@/app/utils'
import type {WatchItemType} from '@/app/types/types'

export async function getWatchedMovies(): Promise<WatchItemType[]> {
  const watchedItems = await getWatchedItems()

  if (!watchedItems?.data?.length) {
    return []
  }

  const watchedMovies: WatchItemType[] = []

  for (const watchedItem of watchedItems.data) {
    if (watchedItem.media_type === 'movie') {
      const watchedItemDetails = await getMovieDetails(watchedItem.tmdb_id)
      const buildedWatchedItem = buildWatchItem(watchedItemDetails)
      watchedMovies.push({
        ...buildedWatchedItem,
        mediaType: watchedItem.media_type,
      })
    }
  }

  return watchedMovies
}
