import {watchItemFixture} from '../../../../../fixtures'
import {WatchItemInfo} from '.'
import type {StoryObj, Meta} from '@storybook/react'

const meta: Meta<typeof WatchItemInfo> = {
  component: WatchItemInfo,
  tags: ['autodocs'],
}
export default meta

export const Primary: StoryObj<typeof WatchItemInfo> = {
  args: {
    watchItem: watchItemFixture,
  },
}
