import type {StoryObj, Meta} from '@storybook/react'
import {Button} from '.'

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
}
export default meta

export const Primary: StoryObj<typeof Button> = {
  args: {
    children: 'Button',
    onClick: () => {},
  },
}

export const Loading: StoryObj<typeof Button> = {
  args: {
    onClick: () => {},
    isLoading: true,
  },
}
