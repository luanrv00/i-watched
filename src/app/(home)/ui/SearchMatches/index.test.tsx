import {render, screen} from '@testing-library/react'
import {SearchMatches} from '.'
import {watchItemFixture} from '../../../../../fixtures'
import type {WatchItemFullType} from '@/app/types/types'

describe(SearchMatches, () => {
  describe('when has matches', () => {
    const matchesList: WatchItemFullType[] = [watchItemFixture]

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
})
