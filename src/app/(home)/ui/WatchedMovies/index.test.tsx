import {render, screen, within} from '@testing-library/react'
import {watchMovieFixture} from '@/fixtures'
import {WatchedMovies} from '.'

describe('WatchedMovies', () => {
  it('renders section title', () => {
    render(<WatchedMovies watchedItems={[watchMovieFixture]} />)
    expect(screen.getByRole('heading', {level: 2})).toHaveTextContent(
      /Watched Movies/i,
    )
  })

  describe('when has watched movies', () => {
    beforeEach(() => {
      render(<WatchedMovies watchedItems={[watchMovieFixture]} />)
    })

    it('renders all watched movies', () => {
      expect(
        within(screen.getByRole('list')).getAllByRole('listitem'),
      ).toHaveLength(1)
    })
  })

  describe('when has not watched movies', () => {
    beforeEach(() => {
      render(<WatchedMovies watchedItems={[]} />)
    })

    it('renders info message', () => {
      expect(screen.getByText(/Add watched Movies/i)).toBeInTheDocument()
    })
  })
})
