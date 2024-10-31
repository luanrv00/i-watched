import {render, screen} from '@testing-library/react'
import {watchItemFixture, watchTvSeriesFixture} from '../../../../../fixtures'
import {WatchItemInfo} from '.'

describe('WatchItemInfo', () => {
  beforeEach(() => {
    render(<WatchItemInfo watchItem={watchItemFixture} />)
  })

  it('renders match poster', () => {
    const parsedImageUrl =
      '/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw300_and_h450_bestv2%2F5KGQEaE519pOD9DltmWBo6OcuH1.jpg&w=256&q=75'

    expect(screen.getByRole('img')).toHaveAttribute('src', parsedImageUrl)
  })

  it('renders match title', () => {
    expect(screen.getByText(watchItemFixture.title)).toBeInTheDocument()
  })

  it('renders match release year', () => {
    expect(screen.getByText(watchItemFixture.releaseYear)).toBeInTheDocument()
  })

  it('renders match media type', () => {
    expect(screen.getByText(watchItemFixture.mediaType)).toBeInTheDocument()
  })

  describe('when match is an anime or tv show', () => {
    beforeEach(() => {
      render(<WatchItemInfo watchItem={watchTvSeriesFixture} />)
    })

    it('renders match seasons count', () => {
      const expectedText = `seasons: ${watchTvSeriesFixture.seasonsCount}`
      expect(screen.getByText(expectedText)).toBeInTheDocument()
    })

    it('renders match episodes count', () => {
      const expectedText = `episodes: ${watchTvSeriesFixture.episodesCount}`
      expect(screen.getByText(expectedText)).toBeInTheDocument()
    })
  })
})
