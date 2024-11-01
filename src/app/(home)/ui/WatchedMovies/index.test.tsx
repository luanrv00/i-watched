jest.mock('../../../services/getWatchedMovies')
import {render, screen, within} from '@testing-library/react'
import {watchMovieFixture} from '@/fixtures'
import {WatchedMovies} from '.'
import {getWatchedMovies} from '@/app/services'

describe('WatchedMovies', () => {
  it('renders section title', () => {
    render(<WatchedMovies />)
    expect(screen.getByRole('heading', {level: 2})).toHaveTextContent(
      /Watched Movies/i,
    )
  })

  it('calls getWatchedTvSeries', () => {
    render(<WatchedMovies />)
    expect(getWatchedMovies).toHaveBeenCalled()
  })

  describe('when has watched movies', () => {
    const mockWatchedMovies = [watchMovieFixture]

    beforeEach(() => {
      ;(getWatchedMovies as jest.Mock).mockReturnValue(mockWatchedMovies)
      render(<WatchedMovies />)
    })

    it('renders all watched movies', () => {
      expect(
        within(screen.getByRole('list')).getAllByRole('listitem'),
      ).toHaveLength(mockWatchedMovies.length)
    })
  })

  describe('when has not watched movies', () => {
    beforeEach(() => {
      render(<WatchedMovies />)
    })

    it('renders info message', () => {
      expect(screen.getByText(/Add watched Movies/i)).toBeInTheDocument()
    })
  })
})
