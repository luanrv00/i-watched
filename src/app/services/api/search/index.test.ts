jest.mock('../../api/getWatchedItems')
import {search} from '.'
import {getWatchedItems} from '../../api'
import {watchItemFixture} from '../../../../../fixtures'

describe(search, () => {
  beforeEach(async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            data: [watchItemFixture],
          }),
      }),
    ) as jest.Mock
  })

  it('calls search api', async () => {
    const searchTerm = 'matrix'
    await search(searchTerm)
    expect(fetch).toHaveBeenCalledWith('/api/shows/search?searchTerm=matrix')
  })

  it('returns matches list', async () => {
    const result = await search('matrix')
    expect(result.length).toEqual(1)
  })

  describe('when has watched items', () => {
    let response = null

    beforeEach(async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () =>
            Promise.resolve({
              data: [watchItemFixture, {...watchItemFixture, tmdbId: 10}],
            }),
        }),
      ) as jest.Mock
      ;(getWatchedItems as jest.Mock).mockReturnValue({
        data: [
          {
            id: 0,
            user_id: 0,
            tmdb_id: 10,
            media_type: 'movie',
          },
        ],
      })

      response = await search('matrix')
    })

    it('calls api/getWatchedItems', () => {
      expect(getWatchedItems).toHaveBeenCalled()
    })

    it('remove watched items from the search list', () => {
      expect(response.length).toEqual(1)
    })
  })
})
