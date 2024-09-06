export type TMDBResponseItemType = {
  id: number
  poster_path: string
  release_date: string
  title: string
  name: string
  media_type: 'tv' | 'movie' | 'person'
}

export type WatchItemType = {
  tmdb_id: number
  poster_url: string
  release_year: string
  title: string
  media_type: 'tv' | 'movie'
}
