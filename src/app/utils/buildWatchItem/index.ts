import {TMDB_POSTERS_URL} from '../../../app/constants'
import type {TMDBItemType, WatchItemType} from '../../../app/types/types'

export function buildWatchItem(tmdbData: TMDBItemType): WatchItemType {
  const title = tmdbData?.title || (tmdbData?.name as string)

  return {
    tmdbId: tmdbData.id,
    posterUrl: `${TMDB_POSTERS_URL}/${tmdbData.poster_path}`,
    releaseYear: tmdbData.release_date?.split('-')[0],
    title,
    mediaType: tmdbData.media_type,
  }
}
