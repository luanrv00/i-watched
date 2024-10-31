import {WatchedItemDBType, WatchItemType} from '@/app/types/types'
import { getWatchedItems } from '../getWatchedItems'

export async function search(searchTerm: string): Promise<WatchItemType[]> {
  const searchQueryEndpoint = `/api/shows/search?searchTerm=${searchTerm}`
  const searchMatches = await fetch(searchQueryEndpoint)
    .then(res => res.json())
    .catch(err => console.log('---------------- err', err))

    const watchedItems: {data: WatchedItemDBType[]} = await getWatchedItems()
    const watchedItemsIds = watchedItems?.data?.map((watchedItem: WatchedItemDBType) => watchedItem.tmdb_id) || []

    let filteredSearchMatches: WatchItemType[] = []

    if (!watchedItems?.data?.length) {
      filteredSearchMatches = searchMatches.data
    } else {
      filteredSearchMatches = searchMatches.data.filter((matchItem: WatchItemType) => !watchedItemsIds.includes(matchItem.tmdbId))
    }

  return filteredSearchMatches
}
