import type {StoryObj, Meta} from '@storybook/react'
import {TextParagraph} from '.'

const meta: Meta<typeof TextParagraph> = {
  component: TextParagraph,
  tags: ['autodocs'],
  title: 'text/TextParagraph'
}
export default meta

export const TextParagraphPrimary: StoryObj<typeof TextParagraph> = {
  args: {
    children: 'Text',
  },
}
