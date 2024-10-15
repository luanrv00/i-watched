import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import {watchItemFixture} from '../../../../../fixtures'
import {SearchMatch} from '.'

describe(SearchMatch, () => {
  beforeEach(() => {
    render(<SearchMatch matchItem={watchItemFixture} />)
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

  it('renders button to add watched item', () => {
    expect(screen.getByRole('button', {name: /add/i})).toBeInTheDocument()
  })

  describe('when match is an anime or tv show', () => {
    const matchItemFull = {
      ...watchItemFixture,
      seasonsCount: 1,
      episodesCount: 10,
    }

    beforeEach(() => {
      render(<SearchMatch matchItem={matchItemFull} />)
    })

    it('renders match seasons count', () => {
      const expectedText = `seasons: ${matchItemFull.seasonsCount}`
      expect(screen.getByText(expectedText)).toBeInTheDocument()
    })

    it('renders match episodes count', () => {
      const expectedText = `episodes: ${matchItemFull.episodesCount}`
      expect(screen.getByText(expectedText)).toBeInTheDocument()
    })
  })

  describe('when clicking on add button', () => {
    beforeEach(() => {
      render(<SearchMatch matchItem={watchItemFixture} />)
    })

    it('calls post watched_items api', async () => {
      fireEvent.click(screen.getAllByRole('button', {name: /add/i})[0])
      // TODO: expect service post watched item to have been called
      //expect().toHaveBeenCalled()
    })
  })
})
