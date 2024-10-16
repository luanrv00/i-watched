export async function postWatchedItem(tmdbId: number): Promise<void> {
  await fetch('/api/shows/watched_items', {
    method: 'POST',
    body: JSON.stringify({tmdbId}),
  })
}
