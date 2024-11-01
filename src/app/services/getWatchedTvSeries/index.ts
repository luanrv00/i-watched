import {WatchItemType} from '@/app/types/types'
import {getWatchedItems} from '../api'
import {getTvSeriesDetails} from '../getTvSeriesDetails'
import {buildWatchItem} from '@/app/utils'

export async function getWatchedTvSeries(): Promise<WatchItemType[]> {
  const watchedItems = await getWatchedItems()

  if (!watchedItems?.data?.length) {
    return []
  }

  const watchedTvSeries: WatchItemType[] = []

  for (const watchedItem of watchedItems.data) {
    if (watchedItem.media_type === 'tv') {
      const watchedItemDetails = await getTvSeriesDetails(watchedItem.tmdb_id)
      const buildedWatchedItem = buildWatchItem(watchedItemDetails)
      watchedTvSeries.push({
        ...buildedWatchedItem,
        mediaType: watchedItem.media_type,
      })
    }
  }

  return watchedTvSeries
}
