import Knex from 'knex'
import config from '../../../../../knexfile'

export async function GET() {
  try {
    const knex = Knex(config)
    await knex.schema.createTable('watched_items', table => {
      table.increments()
      table.timestamps()
      table.integer('user_id')
      table.integer('tmdb_id')
      table.boolean('has_episodes')
    })

    await knex.schema.createTable('watched_episodes', table => {
      table.increments()
      table.timestamps()
      table.integer('watched_item_id')
      table.integer('tmdb_id')
      table.integer('season_number')
      table.integer('episode_number')
    })
  } catch (e) {
    console.log('---------------e', e)
  }
}
