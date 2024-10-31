import type {WatchItemType} from '@/app/types/types'
import {TextParagraph, TextSubtitle} from '@/app/ui'
import {WatchedItemsList} from '..'

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
