import type {NextRequest} from 'next/server'
import type {TMDBResponseItemType, WatchItemType} from '@/app/types/types'
import {TMDB_POSTERS_URL} from '@/app/constants'
import {searchMulti} from '@/app/services'

export async function GET(request: NextRequest): Promise<null | Response> {
  const searchParams = request.nextUrl.searchParams
  const searchTerm = searchParams.get('searchTerm')

  if (!searchTerm) {
    return null
  }

  const searchMatches: TMDBResponseItemType[] = await searchMulti(searchTerm)

  const data: WatchItemType[] = searchMatches.map(
    (matchItem: TMDBResponseItemType) => ({
      tmdbId: matchItem.id,
      posterUrl: `${TMDB_POSTERS_URL}/${matchItem.poster_path}`,
      releaseYear: matchItem.release_date.split('-')[0],
      title: matchItem?.title || matchItem?.name,
      mediaType: matchItem.media_type,
    }),
  )

  return Response.json({data})
}
