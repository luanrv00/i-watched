import Image from 'next/image'
import type {WatchItemType} from '@app/types/types'

export function WatchItemInfo({watchItem}: {watchItem: WatchItemType}) {
  if(!watchItem) {
    return null
  }

  return (
    <div>
      <Image src={watchItem.posterUrl} width='100' height='150' alt='cover' />
      <div className='ml-2 w-full flex flex-col'>
        <p>{watchItem.title}</p>
        <p>{watchItem.releaseYear}</p>
        <p>{watchItem.mediaType}</p>
        {watchItem.seasonsCount && <p>seasons: {watchItem.seasonsCount}</p>}
        {watchItem.episodesCount && <p>episodes: {watchItem.episodesCount}</p>}
      </div>
    </div>
  )
}
