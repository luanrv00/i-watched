jest.mock('../../../services/getWatchedItemsWithDetails')
import {render, act} from '@testing-library/react'
import { getWatchedItemsWithDetails } from '@/app/services'
import { WatchedItems } from '.'

describe('WatchedItems', () => {
  beforeEach(async () => {
    await act(async () => {
      render(<WatchedItems/>)
    })
  })

  it('calls getWatchedItemsWithDetails', () => {
    expect(getWatchedItemsWithDetails).toHaveBeenCalled()
  })
})
