import {act, fireEvent, render, screen} from '@testing-library/react'
import {SearchContainer} from '.'
import {search} from '@/app/services'

describe(SearchContainer, () => {
  describe('when calling onSearch', () => {
    it('calls search service', () => {
      jest.mock('../../../services/api/search')
      render(<SearchContainer />)
      act(() => {
        fireEvent.change(screen.getByPlaceholderText(/type anything.../i), {
          target: {value: 'matrix'},
        })
      })
      expect(search).toHaveBeenCalled
    })
  })
})
