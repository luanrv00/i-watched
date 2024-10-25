import type {WatchItemType} from '@/app/types/types'

export const watchItemFixture: WatchItemType = {
  tmdbId: 0,
  posterUrl:
    'https://image.tmdb.org/t/p/w300_and_h450_bestv2/5KGQEaE519pOD9DltmWBo6OcuH1.jpg',
  releaseYear: '2016',
  title: 'title',
  mediaType: 'movie',
}

export const watchMovieFixture: WatchItemType = {
  tmdbId: 0,
  posterUrl:
    'https://image.tmdb.org/t/p/w300_and_h450_bestv2/5KGQEaE519pOD9DltmWBo6OcuH1.jpg',
  releaseYear: '2016',
  title: 'title',
  mediaType: 'movie',
}

export const watchTvSeriesFixture: WatchItemType = {
  tmdbId: 0,
  posterUrl:
    'https://image.tmdb.org/t/p/w300_and_h450_bestv2/5KGQEaE519pOD9DltmWBo6OcuH1.jpg',
  releaseYear: '2016',
  title: 'title',
  mediaType: 'tv',
  seasonsCount: 2,
  episodesCount: 3
}
