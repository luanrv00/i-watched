import type {TMDBTvSeriesType, WatchItemType} from '@/app/types/types'
import {buildWatchItem} from '.'

describe('buildWatchItem', () => {
  let response: WatchItemType = {
    tmdbId: 0,
    posterUrl: '',
    releaseYear: '',
    title: '',
    mediaType: 'tv',
    seasonsCount: 0,
    episodesCount: 0,
  }

  beforeEach(() => {
    const tmdbData: TMDBTvSeriesType = {
      id: 10,
      poster_path: 'string',
      release_date: '2000',
      title: 'title',
      name: 'name',
      media_type: 'tv',
      number_of_seasons: 0,
      number_of_episodes: 0,
    }

    response = buildWatchItem(tmdbData)
  })

  it('returns tmdbId', () => {
    expect(response['tmdbId']).not.toEqual(0)
  })

  it('returns posterUrl', () => {
    expect(response['posterUrl']).not.toEqual('')
  })

  it('returns releaseYear', () => {
    expect(response['releaseYear']).not.toEqual('')
  })

  it('returns title', () => {
    expect(response['title']).not.toEqual('')
  })

  it('returns mediaType', () => {
    expect(response['mediaType']).toEqual('tv')
  })

  it('returns seasonsCount', () => {
    expect(response['seasonsCount']).toEqual(0)
  })

  it('returns episodesCount', () => {
    expect(response['episodesCount']).toEqual(0)
  })
})
