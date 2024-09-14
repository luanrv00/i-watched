import type {TMDBItemDetailsType, WatchItemDetailsType} from '@/app/types/types'
import {buildWatchItemDetails} from '.'

describe('buildWatchItemDetails', () => {
  let response: WatchItemDetailsType = {
    seasonsCount: 0,
    episodesCount: 0,
  }

  beforeEach(() => {
    const tmdbData: TMDBItemDetailsType = {
      number_of_seasons: 6,
      number_of_episodes: 10,
    }

    response = buildWatchItemDetails(tmdbData)
  })

  it('returns seasonsCount', () => {
    expect(response['seasonsCount']).not.toEqual(0)
  })

  it('returns episodesCount', () => {
    expect(response['episodesCount']).not.toEqual(0)
  })
})
