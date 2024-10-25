jest.mock('../../../services/getWatchedItemsWithDetails')
import {render, screen, act, within} from '@testing-library/react'
import { WatchedItems, WatchedItemsType } from '.'
import { getWatchedItemsWithDetails } from '@/app/services'
import { watchMovieFixture, watchTvSeriesFixture } from '../../../../../fixtures'

describe('WatchedItems', () => {
  const mockWatchedItems: WatchedItemsType = {
    watchedTvSeries: [watchTvSeriesFixture],
    watchedMovies: [watchMovieFixture],
  }

  const mockEmptyWatchedItems: WatchedItemsType = {
    watchedTvSeries: [],
    watchedMovies: [],
  }

  describe('when has watched tv series', () => {
    beforeEach(async () => {
      (getWatchedItemsWithDetails as jest.Mock).mockResolvedValue(mockWatchedItems)

      await act(async () => {
        await render(<WatchedItems/>)
      })
    })

    it('renders section title', () => {
      expect(screen.getAllByRole('heading', {level: 2})[0]).toHaveTextContent(/Watched TV Series/i)
    })

    it('renders all watched tv series', () => {
      expect(within(screen.getAllByRole('list')[0]).getAllByRole('listitem')).toHaveLength(mockWatchedItems.watchedTvSeries.length)
    })
  })

  //describe('when has not watched tv series', () => {
  //  beforeEach(async () => {
  //    (getWatchedItemsWithDetails as jest.Mock).mockResolvedValue(mockEmptyWatchedItems)

  //    await act(async () => {
  //      await render(<WatchedItems/>)
  //    })
  //  })

  //  it('renders info message', () => {
  //    expect(screen.getByText(/Add watched TV Series/i)).toBeInTheDocument()
  //  })
  //})

  describe('when has watched movies', () => {
    beforeEach(async () => {
      (getWatchedItemsWithDetails as jest.Mock).mockResolvedValue(mockWatchedItems)

      await act(async () => {
        await render(<WatchedItems/>)
      })
    })

    it('renders section title', () => {
      expect(screen.getAllByRole('heading', {level: 2})[1]).toHaveTextContent(/Watched Movies/i)
    })

    it('renders all watched movies', () => {
      expect(within(screen.getAllByRole('list')[1]).getAllByRole('listitem')).toHaveLength(mockWatchedItems.watchedMovies.length)
    })
  })

  describe('when has not watched movies', () => {
    // does not renders section title
  })
})
