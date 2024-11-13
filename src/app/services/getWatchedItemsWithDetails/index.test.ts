jest.mock('../../services/api/getWatchedItems')
jest.mock('../../services/getTvSeriesDetails')
jest.mock('../../services/getMovieDetails')
jest.mock('../../utils/buildWatchItem')
import {
  getWatchedItemsWithDetails,
  getWatchedItems,
  getTvSeriesDetails,
  getMovieDetails,
} from '@/app/services'
import {
  tmdbMovieFixture,
  tmdbTvSeriesFixture,
  watchMovieFixture,
  watchTvSeriesFixture,
} from '../../../../fixtures'
import {buildWatchItem} from '@/app/utils'

describe('getWatchedItemsWithDetails', () => {
  it('calls getWatchedItems service', async () => {
    await getWatchedItemsWithDetails()
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

        await getWatchedItemsWithDetails()
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

        await getWatchedItemsWithDetails()
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

        await getWatchedItemsWithDetails()
      })

      it('calls getTvSeriesDetails three times', async () => {
        expect(getTvSeriesDetails).toHaveBeenCalledTimes(3)
      })
    })
  })

  describe('calls getMovieDetails for each watched movie', () => {
    describe('when has one movie', () => {
      beforeEach(async () => {
        ;(getWatchedItems as jest.Mock).mockReturnValue({
          data: [
            {
              id: 0,
              user_id: 0,
              tmdb_id: 0,
              media_type: 'movie',
            },
          ],
        })

        await getWatchedItemsWithDetails()
      })

      it('calls getMovieDetails once ', async () => {
        expect(getMovieDetails).toHaveBeenCalledTimes(1)
      })
    })

    describe('when has two movies', () => {
      beforeEach(async () => {
        ;(getWatchedItems as jest.Mock).mockReturnValue({
          data: [
            {
              id: 0,
              user_id: 0,
              tmdb_id: 0,
              media_type: 'movie',
            },
            {
              id: 0,
              user_id: 0,
              tmdb_id: 0,
              media_type: 'movie',
            },
          ],
        })

        await getWatchedItemsWithDetails()
      })

      it('calls getMovieDetails twice ', async () => {
        expect(getMovieDetails).toHaveBeenCalledTimes(2)
      })
    })

    describe('when has three movies', () => {
      beforeEach(async () => {
        ;(getWatchedItems as jest.Mock).mockReturnValue({
          data: [
            {
              id: 0,
              user_id: 0,
              tmdb_id: 0,
              media_type: 'movie',
            },
            {
              id: 0,
              user_id: 0,
              tmdb_id: 0,
              media_type: 'movie',
            },
            {
              id: 0,
              user_id: 0,
              tmdb_id: 0,
              media_type: 'movie',
            },
          ],
        })

        await getWatchedItemsWithDetails()
      })

      it('calls getMovieDetails three times', async () => {
        expect(getMovieDetails).toHaveBeenCalledTimes(3)
      })
    })
  })

  describe('when has watched tv series', () => {
    beforeEach(() => {
      ;(getWatchedItems as jest.Mock).mockReturnValue({
        data: [
          {
            id: 0,
            user_id: 0,
            tmdb_id: 0,
            media_type: 'tv',
          },
        ],
      })
      ;(getTvSeriesDetails as jest.Mock).mockReturnValue(tmdbTvSeriesFixture)
      ;(buildWatchItem as jest.Mock).mockReturnValue(watchTvSeriesFixture)
    })

    it('returns watched tv series', async () => {
      const response = await getWatchedItemsWithDetails()
      expect(response).toHaveProperty('watchedTvSeries', [watchTvSeriesFixture])
    })
  })

  describe('when has not watched tv series', () => {
    beforeEach(() => {
      ;(getWatchedItems as jest.Mock).mockReturnValue({
        data: [],
      })
      ;(getMovieDetails as jest.Mock).mockReturnValue([])
    })

    it('returns empty array', async () => {
      const response = await getWatchedItemsWithDetails()
      expect(response).toHaveProperty('watchedTvSeries', [])
    })
  })

  describe('when has watched movies', () => {
    beforeEach(() => {
      ;(getWatchedItems as jest.Mock).mockReturnValue({
        data: [
          {
            id: 0,
            user_id: 0,
            tmdb_id: 0,
            media_type: 'movie',
          },
        ],
      })
      ;(getMovieDetails as jest.Mock).mockReturnValue(tmdbMovieFixture)
      ;(buildWatchItem as jest.Mock).mockReturnValue(watchMovieFixture)
    })

    it('returns watched movies', async () => {
      const response = await getWatchedItemsWithDetails()
      expect(response).toHaveProperty('watchedMovies', [watchMovieFixture])
    })
  })

  describe('when has not watched movies', () => {
    beforeEach(() => {
      ;(getWatchedItems as jest.Mock).mockReturnValue({
        data: [],
      })
      ;(getMovieDetails as jest.Mock).mockReturnValue([])
    })

    it('returns empty array', async () => {
      const response = await getWatchedItemsWithDetails()
      expect(response).toHaveProperty('watchedMovies', [])
    })
  })
})
