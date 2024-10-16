import {search} from '.'
import {watchItemFixture} from '../../../../../fixtures'

describe(search, () => {
  beforeEach(async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            data: [watchItemFixture],
          }),
      })
    ) as jest.Mock
  })

  // TODO: test that fetch is called with expected query
  // i.e. /api/shows/search?searchTerm=matrix
  it('calls search api', async () => {
    const searchTerm = 'matrix'
    await search(searchTerm)
    expect(jest).toHaveBeenCalled
  })

  it('returns matches list', async () => {
    const result = await search('matrix')
    expect(result.length).toEqual(1)
  })
})
