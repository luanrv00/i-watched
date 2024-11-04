import {watchItemFixture, watchTvSeriesFixture} from '@/fixtures'
import {WatchedItemsList} from '.'
import type {StoryObj, Meta} from '@storybook/react'

const meta: Meta<typeof WatchedItemsList> = {
  component: WatchedItemsList,
  tags: ['autodocs'],
}
export default meta

export const Primary: StoryObj<typeof WatchedItemsList> = {
  args: {
    watchedItems: [
      watchItemFixture,
      watchItemFixture,
      watchItemFixture,
      watchItemFixture,
      watchTvSeriesFixture,
    ],
  },
}
