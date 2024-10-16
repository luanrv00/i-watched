export async function postWatchedItem({
  tmdbId,
  mediaType,
}: {
  tmdbId: number
  mediaType: string
}): Promise<void> {
  await fetch('/api/shows/watched_items', {
    method: 'POST',
    body: JSON.stringify({tmdbId, mediaType}),
  })
}
