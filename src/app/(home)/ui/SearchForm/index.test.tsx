import {act} from 'react'
import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import {SearchForm} from '.'

describe(SearchForm, () => {
  it('renders a form', async () => {
    render(<SearchForm onSearch={() => {}} />)
    expect(screen.getByRole('form')).toBeInTheDocument()
  })

  it('renders input label', async () => {
    render(<SearchForm onSearch={() => {}} />)
    expect(
      screen.getByLabelText(/Search for an Anime, TV Series or Movie/i),
    ).toBeInTheDocument()
  })

  describe('when searching', () => {
    it('calls onSearch', async () => {
      const onSearch = jest.fn()
      render(<SearchForm onSearch={onSearch} />)
      act(() => {
        fireEvent.change(screen.getByPlaceholderText(/type anything.../i), {
          target: {value: 'matrix'},
        })
      })
      waitFor(() => {
        expect(onSearch).toHaveBeenCalled()
      })
    })
  })
})
