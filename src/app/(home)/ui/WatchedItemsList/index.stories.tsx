import type {StoryObj, Meta} from '@storybook/react'
import {WatchedItemsList} from '.'
import { watchItemFixture, watchTvSeriesFixture } from '../../../../../fixtures'

const meta: Meta<typeof WatchedItemsList> = {
  component: WatchedItemsList,
  tags: ['autodocs'],
}
export default meta

export const Primary: StoryObj<typeof WatchedItemsList> = {
  args: {
    watchedItems: [watchItemFixture, watchItemFixture, watchItemFixture, watchItemFixture, watchTvSeriesFixture]
  },
}
