import type {NextRequest} from 'next/server'
import type {
  TMDBItemType,
  WatchItemDetailsType,
  WatchItemFullType,
  WatchItemType,
} from '@/app/types/types'
import {searchMulti, getWatchItemDetails} from '@/app/services'
import {buildWatchItem, buildWatchItemDetails} from '@/app/utils'

export async function GET(request: NextRequest): Promise<void | Response> {
  const searchParams = request.nextUrl.searchParams
  const searchTerm = searchParams.get('searchTerm')

  if (!searchTerm) {
    return
  }

  const searchMatches: TMDBItemType[] = await searchMulti(searchTerm)
  const watchItems: WatchItemType[] = []

  for (const matchItem of searchMatches) {
    let buildedMatchItem: {} | WatchItemFullType = {}

    if (matchItem.media_type !== 'movie') {
      const matchItemDetails = await getWatchItemDetails(matchItem.id)
      const watchItemDetails: WatchItemDetailsType =
        buildWatchItemDetails(matchItemDetails)

      buildedMatchItem = {...buildedMatchItem, ...watchItemDetails}
    }

    const watchItem: WatchItemType = buildWatchItem(matchItem)

    buildedMatchItem = {...buildedMatchItem, ...watchItem}
    watchItems.push(buildedMatchItem as WatchItemFullType)
  }

  return Response.json({data: watchItems})
}
