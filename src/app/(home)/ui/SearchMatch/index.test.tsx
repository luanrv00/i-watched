jest.mock('../../../services/api/postWatchedItem')
import {act, fireEvent, render, screen} from '@testing-library/react'
import {postWatchedItem} from '@/app/services'
import {watchItemFixture} from '@/fixtures'
import {SearchMatch} from '.'

describe(SearchMatch, () => {
  beforeEach(() => {
    render(<SearchMatch matchItem={watchItemFixture} handleAdd={() => {}} />)
  })

  it('renders button to add watched item', () => {
    expect(screen.getByRole('button', {name: /add/i})).toBeInTheDocument()
  })

  describe('when clicking on add button', () => {
    beforeEach(() => {
      global.fetch = jest.fn()
      render(<SearchMatch matchItem={watchItemFixture} handleAdd={() => {}} />)
    })

    it('calls postWatchedItem service', async () => {
      await act(async () => {
        fireEvent.click(screen.getAllByRole('button', {name: /add/i})[0])
      })
      expect(postWatchedItem).toHaveBeenCalled()
    })
  })
})
