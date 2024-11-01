import {Spacer} from '@/app/ui/Spacer'
import {WatchedTvSeries} from '../WatchedTvSeries'
import {WatchedMovies} from '../WatchedMovies'
import type {WatchItemType} from '@/app/types/types'

export type WatchedItemsType = {
  watchedMovies: WatchItemType[]
  watchedTvSeries: WatchItemType[]
}

export function WatchedItems() {
  return (
    <>
      <WatchedTvSeries />
      <Spacer />
      <WatchedMovies />
    </>
  )
}
