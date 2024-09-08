export type TMDBResponseItemType = {
  id: number
  poster_path: string
  release_date: string
  title: string
  name: string
  media_type: 'tv' | 'movie' | 'person'
}

export type WatchItemType = {
  tmdbId: number
  posterUrl: string
  releaseYear: string
  title: string
  mediaType: 'tv' | 'movie' | 'person'
  episodesCount?: number
  seaonsCount?: number
}
