import type {StoryObj, Meta} from '@storybook/react'
import {TextSubtitle} from '.'

const meta: Meta<typeof TextSubtitle> = {
  component: TextSubtitle,
  tags: ['autodocs'],
  title: 'text/TextSubtitle'
}
export default meta

export const TextSubtitlePrimary: StoryObj<typeof TextSubtitle> = {
  args: {
    children: 'Text',
  },
}
