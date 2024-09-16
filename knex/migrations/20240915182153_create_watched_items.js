/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('watched_items', table => {
    table.increments('id')
    table.integer('tmdbId')
    table.string('posterUrl')
    table.string('releaseYear')
    table.string('title')
    table.string('mediaType')
    table.integer('seasonsCount')
    table.integer('episodesCount')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {}
