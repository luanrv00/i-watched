import type {StoryObj, Meta} from '@storybook/react'
import {SearchMatches} from '.'

const meta: Meta<typeof SearchMatches> = {
  component: SearchMatches,
}
export default meta

export const Primary: StoryObj<typeof SearchMatches> = {
  args: {
    matchesList: [
      {
        tmdb_id: 0,
        poster_url: 'string',
        release_year: '2000',
        title: 'title',
        media_type: 'tv',
      },
    ],
  },
}
