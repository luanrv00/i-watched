import type {
  TMDBItemDetailsType,
  WatchItemDetailsType,
} from '../../../app/types/types'

export function buildWatchItemDetails(
  tmdbData: TMDBItemDetailsType
): WatchItemDetailsType {
  return {
    seasonsCount: tmdbData.number_of_seasons,
    episodesCount: tmdbData.number_of_episodes,
  }
}
