import {TextParagraph, TextSubtitle} from '@/app/ui/Text'
import {WatchedItemsList} from '../WatchedItemsList'
import {getWatchedMovies} from '@/app/services'
import type {WatchItemType} from '@/app/types/types'

export async function WatchedMovies() {
  const watchedMovies: WatchItemType[] = await getWatchedMovies()

  return (
    <>
      <TextSubtitle>Watched Movies</TextSubtitle>
      <WatchedItemsList watchedItems={watchedMovies} />
      {!watchedMovies?.length && (
        <TextParagraph>Add watched Movies</TextParagraph>
      )}
    </>
  )
}
