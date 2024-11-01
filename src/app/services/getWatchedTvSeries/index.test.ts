jest.mock('../../services/api/getWatchedItems')
jest.mock('../../services/getTvSeriesDetails')
jest.mock('../../utils/buildWatchItem')
import {buildWatchItem} from '@/app/utils'
import {getWatchedItems} from '../api'
import {getTvSeriesDetails} from '../getTvSeriesDetails'
import {tmdbTvSeriesFixture, watchTvSeriesFixture} from '../../../../fixtures'
import {getWatchedTvSeries} from '.'

describe('getWatchedTvSeries', () => {
  it('calls getWatchedItems service', async () => {
    await getWatchedTvSeries()
    expect(getWatchedItems).toHaveBeenCalled()
  })

  describe('calls getTvSeriesDetails for each watched tv series', () => {
    describe('when has one tv series', () => {
      beforeEach(async () => {
        ;(getWatchedItems as jest.Mock).mockResolvedValue({
          data: [
            {
              id: 0,
              user_id: 0,
              tmdb_id: 0,
              media_type: 'tv',
            },
          ],
        })

        await getWatchedTvSeries()
      })

      it('calls getTvSeriesDetails once ', async () => {
        expect(getTvSeriesDetails).toHaveBeenCalledTimes(1)
      })
    })

    describe('when has two tv series', () => {
      beforeEach(async () => {
        ;(getWatchedItems as jest.Mock).mockResolvedValue({
          data: [
            {
              id: 0,
              user_id: 0,
              tmdb_id: 0,
              media_type: 'tv',
            },
            {
              id: 0,
              user_id: 0,
              tmdb_id: 0,
              media_type: 'tv',
            },
          ],
        })

        await getWatchedTvSeries()
      })

      it('calls getTvSeriesDetails twice ', async () => {
        expect(getTvSeriesDetails).toHaveBeenCalledTimes(2)
      })
    })

    describe('when has three tv series', () => {
      beforeEach(async () => {
        ;(getWatchedItems as jest.Mock).mockResolvedValue({
          data: [
            {
              id: 0,
              user_id: 0,
              tmdb_id: 0,
              media_type: 'tv',
            },
            {
              id: 0,
              user_id: 0,
              tmdb_id: 0,
              media_type: 'tv',
            },
            {
              id: 0,
              user_id: 0,
              tmdb_id: 0,
              media_type: 'tv',
            },
          ],
        })

        await getWatchedTvSeries()
      })

      it('calls getTvSeriesDetails three times', async () => {
        expect(getTvSeriesDetails).toHaveBeenCalledTimes(3)
      })
    })
  })

  describe('when has watched tv series', () => {
    const mockWatchedTvSeries = [
      {
        id: 0,
        user_id: 0,
        tmdb_id: 0,
        media_type: 'tv',
      },
    ]

    beforeEach(() => {
      ;(getWatchedItems as jest.Mock).mockReturnValue({
        data: mockWatchedTvSeries,
      })
      ;(getTvSeriesDetails as jest.Mock).mockReturnValue(tmdbTvSeriesFixture)
      ;(buildWatchItem as jest.Mock).mockReturnValue(watchTvSeriesFixture)
    })

    it('returns watched tv series', async () => {
      const response = await getWatchedTvSeries()
      expect(response).toHaveLength(mockWatchedTvSeries.length)
    })
  })

  describe('when has not watched tv series', () => {
    beforeEach(() => {
      ;(getWatchedItems as jest.Mock).mockReturnValue({
        data: [],
      })
    })

    it('returns empty array', async () => {
      const response = await getWatchedTvSeries()
      expect(response).toHaveLength(0)
    })
  })
})
