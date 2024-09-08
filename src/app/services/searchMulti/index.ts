import {TMDB_API_URL} from '@/app/constants'
import type {TMDBResponseItemType} from '@/app/types/types'

const TMDB_API_READ_ACCESS_TOKEN = process.env.TMDB_API_READ_ACCESS_TOKEN

export async function searchMulti(
  searchTerm: string,
): Promise<TMDBResponseItemType[]> {
  const apiEndpoint = `${TMDB_API_URL}/search/multi?query=${searchTerm}`
  const apiToken = `Bearer ${TMDB_API_READ_ACCESS_TOKEN}`

  const res = await fetch(apiEndpoint, {
    headers: {
      authorization: apiToken,
    },
  })
    .then(res => res.json())
    .then(res =>
      res.results.filter(
        (matchItem: TMDBResponseItemType) =>
          matchItem['media_type'] !== 'person',
      ),
    )
    .catch(err => console.log('---------------- err', err))

  return res
}
