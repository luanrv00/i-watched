import {TMDB_API_URL} from '../../constants'
import {searchMulti} from '.'
import type {TMDBItemType} from '@/app/types/types'
import { tmdbMovieFixture } from '../../../../fixtures'

const TMDB_API_READ_ACCESS_TOKEN = process.env.TMDB_API_READ_ACCESS_TOKEN

describe('searchMulti', () => {
  const searchTerm = 'matrix'
  const apiEndpoint = `${TMDB_API_URL}/search/multi?query=${searchTerm}`
  let response: TMDBItemType[] = []

  beforeEach(async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            results: [
              tmdbMovieFixture,
              {...tmdbMovieFixture, id: 10}
            ],
          }),
      })
    ) as jest.Mock

    response = await searchMulti(searchTerm)
  })

  it('calls tmdb search multi api', () => {
    expect(fetch).toHaveBeenCalledWith(apiEndpoint, {
      headers: {authorization: `Bearer ${TMDB_API_READ_ACCESS_TOKEN}`},
    })
  })

  it('returns tmdb id', () => {
    expect(response[0]['id']).not.toBeNull()
  })

  it('returns poster_path', () => {
    expect(response[0]['poster_path']).not.toBeNull()
  })

  it('returns release_date', () => {
    expect(response[0]['release_date']).not.toBeNull()
  })

  it('returns title', () => {
    expect(response[0]['title']).not.toBeNull()
  })

  it('returns name', () => {
    expect(response[0]['name']).not.toBeNull()
  })

  it('returns media_type', () => {
    expect(response[0]['media_type']).not.toBeNull()
  })
})
