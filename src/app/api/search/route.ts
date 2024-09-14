import type {NextRequest} from 'next/server'
import type {
  TMDBItemType,
  WatchItemDetailsType,
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
    const matchItemDetails = await getWatchItemDetails(matchItem.id)
    const watchItem: WatchItemType = buildWatchItem(matchItem)
    const watchItemDetails: WatchItemDetailsType =
      buildWatchItemDetails(matchItemDetails)

    watchItems.push({...watchItem, ...watchItemDetails})
  }

  return Response.json({data: watchItems})
}
