import { WatchItemInfo } from '..'
import type {WatchItemType} from '@/app/types/types'

export function WatchedItemsList({watchedItems}: {watchedItems: WatchItemType[]}) {
  if (!watchedItems.length) {
    return null
  }

  return (
    <ul>
      {watchedItems.map((watchedItem: WatchItemType) => (
        <li key={watchedItem.tmdbId}>
          <WatchItemInfo watchItem={watchedItem}/>
        </li>
      ))}
    </ul>
  )
}
