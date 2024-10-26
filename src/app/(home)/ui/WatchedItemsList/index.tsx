import { Spacer } from '@/app/ui'
import { WatchItemInfo } from '..'
import type {WatchItemType} from '@/app/types/types'

export function WatchedItemsList({watchedItems}: {watchedItems: WatchItemType[]}) {
  if (!watchedItems.length) {
    return null
  }

  return (
    <>
      <Spacer/>
        <ul className='flex flex-col gap-3 md:flex-row md:flex-wrap'>
        {watchedItems.map((watchedItem: WatchItemType) => (
          <li key={watchedItem.tmdbId} className='w-60'>
            <WatchItemInfo watchItem={watchedItem}/>
          </li>
        ))}
      </ul>
    </>
  )
}
