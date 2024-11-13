import {act, fireEvent, render, screen} from '@testing-library/react'
import {watchItemFixture} from '../../../../../fixtures'
import {SearchMatches} from '.'
import type {WatchItemType} from '@/app/types/types'

describe(SearchMatches, () => {
  describe('when has matches', () => {
    const matchesList: WatchItemType[] = [watchItemFixture]

    beforeEach(() => {
      render(<SearchMatches matchesList={matchesList} />)
    })

    it('renders match items', () => {
      expect(screen.getAllByRole('listitem')).toHaveLength(matchesList.length)
    })
  })

  describe('when has not matches', () => {
    beforeEach(() => {
      render(<SearchMatches matchesList={[]} />)
    })

    it('renders a message', () => {
      expect(screen.getByText(/no results found/i)).toBeInTheDocument()
    })
  })

  describe('when add a match as watched', () => {
    const mockTitle = 'some great title'
    const matchesList: WatchItemType[] = [
      {...watchItemFixture, title: mockTitle, tmdbId: 10},
    ]

    beforeEach(() => {
      global.fetch = jest.fn()
      render(<SearchMatches matchesList={matchesList} />)
    })

    it('remove it from list', async () => {
      await act(async () => {
        fireEvent.click(screen.getByRole('button', {name: /add/i}))
      })

      expect(screen.queryByText(mockTitle)).not.toBeInTheDocument()
    })
  })
})
