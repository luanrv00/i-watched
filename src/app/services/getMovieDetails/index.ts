import {TMDB_API_URL} from '../../constants'
import type {TMDBItemType} from '@/app/types/types'

const TMDB_API_READ_ACCESS_TOKEN = process.env.TMDB_API_READ_ACCESS_TOKEN

export async function getMovieDetails(tmdbId: number): Promise<TMDBItemType> {
  const apiEndpoint = `${TMDB_API_URL}/movie/${tmdbId}`
  const apiToken = `Bearer ${TMDB_API_READ_ACCESS_TOKEN}`

  const tvSeriesDetails = await fetch(apiEndpoint, {
    headers: {
      authorization: apiToken,
    },
  })
    .then(res => res.json())
    .catch(e => console.log('-----------------e', e))

  return {
    id: tvSeriesDetails.id,
    poster_path: tvSeriesDetails.poster_path,
    release_date: tvSeriesDetails.release_date,
    title: tvSeriesDetails.title || tvSeriesDetails.name,
    media_type: tvSeriesDetails.media_type,
  }
}
