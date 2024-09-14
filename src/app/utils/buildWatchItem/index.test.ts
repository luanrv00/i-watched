import type {TMDBItemType, WatchItemType} from '@/app/types/types'
import {buildWatchItem} from '.'

describe('buildWatchItem', () => {
  let response: WatchItemType = {
    tmdbId: 0,
    posterUrl: '',
    releaseYear: '',
    title: '',
    mediaType: 'tv',
  }

  beforeEach(() => {
    const tmdbData: TMDBItemType = {
      id: 10,
      poster_path: 'string',
      release_date: '2000',
      title: 'title',
      name: 'name',
      media_type: 'tv',
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
})
