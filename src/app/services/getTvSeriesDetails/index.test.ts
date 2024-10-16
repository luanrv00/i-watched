import type {TMDBItemType} from '@/app/types/types'
import {TMDB_API_URL} from '../../constants'
import {getTvSeriesDetails} from '.'

const TMDB_API_READ_ACCESS_TOKEN = process.env.TMDB_API_READ_ACCESS_TOKEN

describe('getTvSeriesDetails', () => {
  const tmdbId = 0
  const apiEndpoint = `${TMDB_API_URL}/tv/${tmdbId}`
  let response: TMDBItemType = {
    id: 0,
    poster_path: '',
    release_date: '',
    title: '',
    name: '',
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
                title: 'title',
                name: 'name',
                media_type: 'tv',
              },
            ],
          }),
      })
    ) as jest.Mock

    response = await getTvSeriesDetails(tmdbId)
  })

  it('calls tmdb tv series api', () => {
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

  it('returns name', () => {
    expect(response['name']).not.toBeNull()
  })

  it('returns media_type', () => {
    expect(response['media_type']).not.toBeNull()
  })
})
