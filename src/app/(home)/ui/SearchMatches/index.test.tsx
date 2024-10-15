import {render, screen} from '@testing-library/react'
import {SearchMatches} from '.'
import {watchItemFixture} from '../../../../../fixtures'
import type {WatchItemFullType} from '@/app/types/types'

describe(SearchMatches, () => {
  const matchesList: WatchItemFullType[] = [watchItemFixture]

  beforeEach(() => {
    render(<SearchMatches matchesList={matchesList} />)
  })

  it('renders match items', () => {
    expect(screen.getAllByRole('listitem')).toHaveLength(matchesList.length)
  })
})
