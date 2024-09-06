import {useEffect, useState} from 'react'
import {useSearchParams} from 'next/navigation'
import type {WatchItemType} from '@/app/types/types'

export function SearchMatches() {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('searchQuery')
  const [searchMatches, setSearchMatches] = useState<null | WatchItemType[]>(
    null,
  )

  useEffect(() => {
    if (!searchQuery) {
      return
    }

    async function fetchSearchItems() {
      const searchQueryEndpoint = `/api/search?searchQuery=${searchQuery}`
      await fetch(searchQueryEndpoint)
        .then(res => res.json())
        .then(res => setSearchMatches(res.data))
        .catch(err => console.log('---------------- err', err))
    }

    fetchSearchItems()
  }, [searchQuery])

  return (
    <>
      {searchMatches?.map((searchMatch: WatchItemType) => (
        <div key={searchMatch.tmdb_id}>
          <p>title: {searchMatch.title}</p>
        </div>
      ))}
    </>
  )
}
