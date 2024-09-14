export type TMDBItemType = {
  id: number
  poster_path: string
  release_date: string
  title: string
  name: string
  media_type: 'tv' | 'movie' | 'person'
}

export type TMDBItemDetailsType = {
  number_of_seasons: number
  number_of_episodes: number
}

export type WatchItemType = {
  tmdbId: number
  posterUrl: string
  releaseYear: string
  title: string
  mediaType: 'tv' | 'movie' | 'person'
}

export type WatchItemDetailsType = {
  seasonsCount: number
  episodesCount: number
}
