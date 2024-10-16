import type {WatchedItemDBType} from '@/app/types/types'
import {getWatchedItems} from '.'

describe('getWatchedItems', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            data: [],
          }),
      })
    ) as jest.Mock
  })

  it('calls GET watched_items api', async () => {
    await getWatchedItems()
    expect(fetch).toHaveBeenCalled()
  })

  describe('when has watched items', () => {
    const watchedItems: WatchedItemDBType[] = [
      {
        id: 0,
        user_id: 0,
        tmdb_id: 0,
        media_type: 'movie',
      },
    ]

    beforeEach(() => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () =>
            Promise.resolve({
              data: watchedItems,
            }),
        })
      ) as jest.Mock
    })

    let response: null | {data: WatchedItemDBType[]} = null

    beforeEach(async () => {
      response = await getWatchedItems()
    })

    it('returns watched items list', () => {
      expect(response?.data.length).toEqual(watchedItems.length)
    })

    it('returns watched items tmdbId', () => {
      const responseItem = response && response.data[0]
      expect(responseItem).toHaveProperty('tmdb_id', watchedItems[0].tmdb_id)
    })

    it('returns watched items mediaType', () => {
      const responseItem = response && response.data[0]
      expect(responseItem).toHaveProperty(
        'media_type',
        watchedItems[0].media_type
      )
    })
  })

  describe('when has not watched items', () => {
    beforeEach(() => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () =>
            Promise.resolve({
              data: [],
            }),
        })
      ) as jest.Mock
    })

    it('returns empty list', async () => {
      const response = await getWatchedItems()
      expect(response.data.length).toEqual(0)
    })
  })
})
