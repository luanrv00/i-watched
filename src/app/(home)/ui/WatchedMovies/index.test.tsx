import {render, screen, within} from '@testing-library/react'
import { watchMovieFixture } from '../../../../../fixtures'
import {WatchedMovies} from '.'

describe('WatchedMovies', () => {
  describe('when has watched movies', () => {
    beforeEach(() => {
      render(<WatchedMovies watchedItems={[watchMovieFixture]} />)
    })

    it('renders section title', () => {
      expect(screen.getByRole('heading', {level: 2})).toHaveTextContent(/Watched Movies/i)
    })

    it('renders all watched movies', () => {
      expect(within(screen.getByRole('list')).getAllByTestId('watched-movies')).toHaveLength(1)
    })
  })

  describe('when has not watched movies', () => {
    beforeEach(() => {
      render(<WatchedMovies watchedItems={[]}/>)
    })

    it('renders info message', () => {
      expect(screen.getByText(/Add watched Movies/i)).toBeInTheDocument()
    })
  })
})

