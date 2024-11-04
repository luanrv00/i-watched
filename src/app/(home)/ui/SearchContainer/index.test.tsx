import {act, fireEvent, render, screen} from '@testing-library/react'
import {search} from '@/app/services'
import {SearchContainer} from '.'

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
