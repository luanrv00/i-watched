import {TextParagraph, TextSubtitle} from '@/app/ui/Text'
import {WatchedItemsList} from '../WatchedItemsList'
import type {WatchItemType} from '@/app/types/types'

export function WatchedMovies({watchedItems}: {watchedItems: WatchItemType[]}) {
  return (
    <>
      <TextSubtitle>Watched Movies</TextSubtitle>
      <WatchedItemsList watchedItems={watchedItems} />
      {!watchedItems.length && (
        <TextParagraph>Add watched Movies</TextParagraph>
      )}
    </>
  )
}
