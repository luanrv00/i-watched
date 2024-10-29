import type {WatchedItemDBType} from '@/app/types/types'
import {TMDB_API_URL} from '../../../constants'

export async function getWatchedItems(): Promise<{
  data: WatchedItemDBType[]
}> {
  const apiEndpoint = `${TMDB_API_URL}/api/shows/watched_items`
  const watchedItems = await fetch(apiEndpoint)
    .then(res => res.json())
    .catch(e => console.log('------------------e', e))
    
  return watchedItems
}
