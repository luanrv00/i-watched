import type {NextRequest} from 'next/server'
import type {TMDBItemType, WatchItemType} from '@/app/types/types'
import {searchMulti, getTvSeriesDetails} from '@/app/services'
import {buildWatchItem} from '@/app/utils'

export async function GET(request: NextRequest): Promise<void | Response> {
  const searchParams = request.nextUrl.searchParams
  const searchTerm = searchParams.get('searchTerm')

  if (!searchTerm) {
    return
  }

  const searchMatches: TMDBItemType[] = await searchMulti(searchTerm)
  const watchItems: WatchItemType[] = []

  for (const matchItem of searchMatches) {
    let buildedMatchItem: {} | WatchItemType = {}

    if (matchItem.media_type !== 'movie') {
      const watchTvSeries = await getTvSeriesDetails(matchItem.id)
      buildedMatchItem = buildWatchItem(watchTvSeries)
    }

    buildedMatchItem = buildWatchItem(matchItem)
    watchItems.push(buildedMatchItem as WatchItemType)
  }

  return Response.json({data: watchItems})
}
