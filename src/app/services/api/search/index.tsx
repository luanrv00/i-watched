export async function search(searchTerm: string) {
  const searchQueryEndpoint = `/api/shows/search?searchTerm=${searchTerm}`
  const res = await fetch(searchQueryEndpoint)
    .then(res => res.json())
    .catch(err => console.log('---------------- err', err))

  return res.data
}
