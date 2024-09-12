import {TMDB_API_URL} from '../../constants'
import {getWatchItemDetails} from '.'
import type {TMDBItemDetailsType} from '@/app/types/types'

describe('getWatchItemDetails', () => {
  const fakeId = 0
  const apiEndpoint = `${TMDB_API_URL}/tv/${fakeId}`
  let response: TMDBItemDetailsType = {
    number_of_seasons: 0,
    number_of_episodes: 0,
  }

  beforeEach(async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            number_of_seasons: 2,
            number_of_episodes: 30,
          }),
      })
    ) as jest.Mock

    response = await getWatchItemDetails(fakeId)
  })

  it('calls tmdb series details api', () => {
    expect(fetch).toHaveBeenCalledWith(apiEndpoint, {
      headers: {authorization: 'Bearer undefined'},
    })
  })

  it('returns number of seasons', () => {
    expect(response['number_of_seasons']).not.toEqual(0)
  })

  it('returns number of episodes', () => {
    expect(response['number_of_episodes']).not.toEqual(0)
  })
})
