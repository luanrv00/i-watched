import {TMDB_API_URL} from '../../constants'
import type {TMDBItemType} from '@/app/types/types'

const TMDB_API_READ_ACCESS_TOKEN = process.env.TMDB_API_READ_ACCESS_TOKEN

export async function searchMulti(searchTerm: string): Promise<TMDBItemType[]> {
  const apiEndpoint = `${TMDB_API_URL}/search/multi?query=${searchTerm}`
  const apiToken = `Bearer ${TMDB_API_READ_ACCESS_TOKEN}`

  const searchMatches = await fetch(apiEndpoint, {
    headers: {
      authorization: apiToken,
    },
  })
    .then(res => res.json())
    .then(res =>
      res.results.filter(
        (matchItem: TMDBItemType) => matchItem['media_type'] !== 'person'
      )
    )
    .catch(err => console.log('---------------- err', err))

  const data = searchMatches.map((matchItem: TMDBItemType) => ({
    id: matchItem.id,
    poster_path: matchItem.poster_path,
    release_date: matchItem.release_date,
    title: matchItem.title,
    name: matchItem.name,
    media_type: matchItem.media_type,
  }))

  return data
}
