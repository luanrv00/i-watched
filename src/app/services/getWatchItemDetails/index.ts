import {TMDB_API_URL} from '../../../app/constants'
import type {TMDBItemDetailsType} from '@/app/types/types'

const TMDB_API_READ_ACCESS_TOKEN = process.env.TMDB_API_READ_ACCESS_TOKEN

export async function getWatchItemDetails(
  id: number
): Promise<TMDBItemDetailsType> {
  const apiEndpoint = `${TMDB_API_URL}/tv/${id}`
  const apiToken = `Bearer ${TMDB_API_READ_ACCESS_TOKEN}`

  const watchItemDetails = await fetch(apiEndpoint, {
    headers: {
      authorization: apiToken,
    },
  })
    .then(res => res.json())
    .catch(err => console.log('-----------------err', err))

  const data = {
    number_of_seasons: watchItemDetails.number_of_seasons,
    number_of_episodes: watchItemDetails.number_of_episodes,
  }

  return data
}
