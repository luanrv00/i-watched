import type {NextRequest} from 'next/server'
import type {TMDBItemType, WatchItemType} from '@/app/types/types'
import {TMDB_POSTERS_URL} from '@/app/constants'
import {searchMulti, getWatchItemDetails} from '@/app/services'

export async function GET(request: NextRequest): Promise<void | Response> {
  const searchParams = request.nextUrl.searchParams
  const searchTerm = searchParams.get('searchTerm')

  if (!searchTerm) {
    return null
  }

  const searchMatches: TMDBItemType[] = await searchMulti(searchTerm)
  const watchItems: WatchItemType[] = []

  for (const matchItem of searchMatches) {
    const matchItemDetails = await getWatchItemDetails(matchItem.id)
    const seasonsCount = matchItemDetails.number_of_seasons
    const episodesCount = matchItemDetails.number_of_episodes

    watchItems.push({
      tmdbId: matchItem.id,
      posterUrl: `${TMDB_POSTERS_URL}/${matchItem.poster_path}`,
      releaseYear: matchItem.release_date?.split('-')[0],
      title: matchItem?.title || matchItem?.name,
      mediaType: matchItem.media_type,
      seasonsCount,
      episodesCount,
    })
  }

  return Response.json({data: watchItems})
}
