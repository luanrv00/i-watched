import type {WatchedItemDBType} from '@/app/types/types'

export async function getWatchedItems(): Promise<{
  data: WatchedItemDBType[]
}> {
  const baseURL = process.env.NEXT_PUBLIC_APP_BASE_URL
  const watchedItems = await fetch(`${baseURL}/api/shows/watched_items`)
    .then(res => res.json())
    .catch(e => console.log('------------------e', e))

  return watchedItems
}
