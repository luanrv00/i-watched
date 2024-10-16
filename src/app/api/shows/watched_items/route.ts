import type {NextRequest} from 'next/server'
import Knex from 'knex'
import config from '../../../../../knexfile'

export async function POST(request: NextRequest): Promise<void | Response> {
  const {tmdbId, mediaType} = await request.json()
  const knex = Knex(config)

  try {
    await knex('watched_items').insert({
      user_id: 0,
      tmdb_id: tmdbId,
      media_type: mediaType,
    })
    return Response.json({ok: true})
  } catch (e) {
    console.log('------------------e', e)
    return Response.json({ok: false})
  }
}
