import {TMDBItemType} from '@/app/types/types'
import {getWatchedItems} from '../api'
import {getMovieDetails} from '../getMovieDetails'
import {getTvSeriesDetails} from '../getTvSeriesDetails'

export async function getWatchedItemsWithDetails() {
  const watchedItems = await getWatchedItems()

  if (!watchedItems?.data?.length) {
    return {watchedTvSeries: null, watchedMovies: null}
  }

  const watchedTvSeries: TMDBItemType[] = []
  const watchedMovies: TMDBItemType[] = []

  for (const watchedItem of watchedItems.data) {
    if (watchedItem.media_type === 'tv') {
      const watchedItemDetails = await getTvSeriesDetails(watchedItem.tmdb_id)
      watchedTvSeries.push(watchedItemDetails)
    }

    if (watchedItem.media_type === 'movie') {
      const watchedItemDetails = await getMovieDetails(watchedItem.tmdb_id)
      watchedMovies.push(watchedItemDetails)
    }
  }

  return {watchedTvSeries, watchedMovies}
}
