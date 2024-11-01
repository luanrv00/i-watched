jest.mock('../../../services/getWatchedTvSeries')
import {render, screen, within} from '@testing-library/react'
import {watchTvSeriesFixture} from '@/fixtures'
import {WatchedTvSeries} from '.'
import {getWatchedTvSeries} from '@/app/services'

describe('WatchedTvSeries', () => {
  it('renders section title', () => {
    render(<WatchedTvSeries />)
    expect(screen.getByRole('heading', {level: 2})).toHaveTextContent(
      /Watched TV Series/i,
    )
  })

  it('calls getWatchedTvSeries', () => {
    render(<WatchedTvSeries />)
    expect(getWatchedTvSeries).toHaveBeenCalled()
  })

  describe('when has watched tv series', () => {
    const mockWatchedTvSeries = [watchTvSeriesFixture]

    beforeEach(() => {
      ;(getWatchedTvSeries as jest.Mock).mockReturnValue(mockWatchedTvSeries)
      render(<WatchedTvSeries />)
    })

    it('renders all watched tv series', () => {
      expect(
        within(screen.getByRole('list')).getAllByRole('listitem'),
      ).toHaveLength(mockWatchedTvSeries.length)
    })
  })

  describe('when has not watched tv series', () => {
    beforeEach(() => {
      render(<WatchedTvSeries />)
    })

    it('renders info message', () => {
      expect(screen.getByText(/Add watched TV Series/i)).toBeInTheDocument()
    })
  })
})
