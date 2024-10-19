import type {WatchItemType} from '@/app/types/types'
import {getWatchedItems} from '../api'
import {getMovieDetails} from '../getMovieDetails'
import {getTvSeriesDetails} from '../getTvSeriesDetails'
import {buildWatchItem} from '@/app/utils'

export async function getWatchedItemsWithDetails(): Promise<{
  watchedTvSeries: WatchItemType[]
  watchedMovies: WatchItemType[]
}> {
  const watchedItems = await getWatchedItems()

  if (!watchedItems?.data?.length) {
    return {watchedTvSeries: [], watchedMovies: []}
  }

  const watchedTvSeries: WatchItemType[] = []
  const watchedMovies: WatchItemType[] = []

  for (const watchedItem of watchedItems.data) {
    if (watchedItem.media_type === 'tv') {
      const watchedItemDetails = await getTvSeriesDetails(watchedItem.tmdb_id)
      const buildedWatchedItem = buildWatchItem(watchedItemDetails)
      watchedTvSeries.push({
        ...buildedWatchedItem,
        mediaType: watchedItem.media_type,
      })
    }

    if (watchedItem.media_type === 'movie') {
      const watchedItemDetails = await getMovieDetails(watchedItem.tmdb_id)
      const buildedWatchedItem = buildWatchItem(watchedItemDetails)
      watchedMovies.push({
        ...buildedWatchedItem,
        mediaType: watchedItem.media_type,
      })
    }
  }

  return {watchedTvSeries, watchedMovies}
}
