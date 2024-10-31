import type {WatchedItemDBType} from '@/app/types/types'

export async function getWatchedItems(): Promise<{
  data: WatchedItemDBType[]
}> {
  const watchedItems = await fetch('/api/shows/watched_items')
    .then(res => res.json())
    .catch(e => console.log('------------------e', e))
    
  return watchedItems
}
