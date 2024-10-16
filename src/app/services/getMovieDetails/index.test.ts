import type {TMDBItemType} from '@/app/types/types'
import {TMDB_API_URL} from '../../constants'
import {getMovieDetails} from '.'

const TMDB_API_READ_ACCESS_TOKEN = process.env.TMDB_API_READ_ACCESS_TOKEN

describe('getMovieDetails', () => {
  const tmdbId = 0
  const apiEndpoint = `${TMDB_API_URL}/movie/${tmdbId}`
  let response: TMDBItemType = {
    id: 0,
    poster_path: '',
    release_date: '',
    title: '',
    media_type: 'tv',
  }

  beforeEach(async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            results: [
              {
                id: 0,
                poster_path: 'string',
                release_date: '2000',
                title: 'name',
                media_type: 'tv',
              },
            ],
          }),
      })
    ) as jest.Mock

    response = await getMovieDetails(tmdbId)
  })

  it('calls tmdb movie details api', () => {
    expect(fetch).toHaveBeenCalledWith(apiEndpoint, {
      headers: {authorization: `Bearer ${TMDB_API_READ_ACCESS_TOKEN}`},
    })
  })

  it('returns tmdb id', () => {
    expect(response['id']).not.toBeNull()
  })

  it('returns poster_path', () => {
    expect(response['poster_path']).not.toBeNull()
  })

  it('returns release_date', () => {
    expect(response['release_date']).not.toBeNull()
  })

  it('returns title', () => {
    expect(response['title']).not.toBeNull()
  })

  it('returns media_type', () => {
    expect(response['media_type']).not.toBeNull()
  })
})
