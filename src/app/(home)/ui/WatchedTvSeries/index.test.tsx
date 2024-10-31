import {render, screen, within} from '@testing-library/react'
import {watchTvSeriesFixture} from '../../../../../fixtures'
import {WatchedTvSeries} from '.'

describe('WatchedTvSeries', () => {
  it('renders section title', () => {
    render(<WatchedTvSeries watchedItems={[watchTvSeriesFixture]} />)
    expect(screen.getByRole('heading', {level: 2})).toHaveTextContent(
      /Watched TV Series/i,
    )
  })

  describe('when has watched tv series', () => {
    beforeEach(() => {
      render(<WatchedTvSeries watchedItems={[watchTvSeriesFixture]} />)
    })

    it('renders all watched tv series', () => {
      expect(
        within(screen.getByRole('list')).getAllByRole('listitem'),
      ).toHaveLength(1)
    })
  })

  describe('when has not watched tv series', () => {
    beforeEach(() => {
      render(<WatchedTvSeries watchedItems={[]} />)
    })

    it('renders info message', () => {
      expect(screen.getByText(/Add watched TV Series/i)).toBeInTheDocument()
    })
  })
})
