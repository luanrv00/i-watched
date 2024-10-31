import {render, screen} from '@testing-library/react'
import {Header} from '.'

describe(Header, () => {
  beforeEach(() => {
    render(<Header />)
  })

  it('renders title', async () => {
    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(
      /I've Watched App/i,
    )
  })

  it('renders description', () => {
    expect(screen.getByRole('paragraph')).toHaveTextContent(
      /Track your Animes, TV Series and Movies progress!/i,
    )
  })
})
