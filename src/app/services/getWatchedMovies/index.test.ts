jest.mock('../../services/api/getWatchedItems')
jest.mock('../../services/getTvSeriesDetails')
jest.mock('../../services/getMovieDetails')
jest.mock('../../utils/buildWatchItem')
import {buildWatchItem} from '@/app/utils'
import {getWatchedMovies} from '.'
import {getWatchedItems} from '../api'
import {getMovieDetails} from '../getMovieDetails'
import {tmdbMovieFixture, watchMovieFixture} from '../../../../fixtures'

describe('getWatchedMovies', () => {
  it('calls getWatchedItems service', async () => {
    await getWatchedMovies()
    expect(getWatchedItems).toHaveBeenCalled()
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

        await getWatchedMovies()
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

        await getWatchedMovies()
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

        await getWatchedMovies()
      })

      it('calls getMovieDetails three times', async () => {
        expect(getMovieDetails).toHaveBeenCalledTimes(3)
      })
    })
  })

  describe('when has watched movies', () => {
    const mockWatchedMovies = [
      {
        id: 0,
        user_id: 0,
        tmdb_id: 0,
        media_type: 'movie',
      },
    ]

    beforeEach(() => {
      ;(getWatchedItems as jest.Mock).mockReturnValue({
        data: mockWatchedMovies,
      })
      ;(getMovieDetails as jest.Mock).mockReturnValue(tmdbMovieFixture)
      ;(buildWatchItem as jest.Mock).mockReturnValue(watchMovieFixture)
    })

    it('returns watched movies', async () => {
      const response = await getWatchedMovies()
      expect(response).toHaveLength(mockWatchedMovies.length)
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
      const response = await getWatchedMovies()
      expect(response).toHaveLength(0)
    })
  })
})
