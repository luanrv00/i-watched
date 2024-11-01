import {TextParagraph, TextSubtitle} from '@/app/ui/Text'
import {WatchedItemsList} from '../WatchedItemsList'
import {getWatchedTvSeries} from '@/app/services'
import type {WatchItemType} from '@/app/types/types'

export async function WatchedTvSeries() {
  const watchedTvSeries: WatchItemType[] = await getWatchedTvSeries()

  return (
    <>
      <TextSubtitle>Watched TV Series</TextSubtitle>
      <WatchedItemsList watchedItems={watchedTvSeries} />
      {!watchedTvSeries?.length && (
        <TextParagraph>Add watched TV Series</TextParagraph>
      )}
    </>
  )
}
