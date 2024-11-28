'use client'
import {Container} from '@/app/ui/Container'
import {Header} from '@/app/ui/Header'
import {SpacerLarge} from '@/app/ui/Spacer'
import {SearchContainer} from './ui/SearchContainer'
import {WatchedItems} from './ui/WatchedItems'
import {useSession} from 'next-auth/react'

export default function Home() {
  const {data: session} = useSession()

  if (session) {
    return (
      <Container>
        <Header />
        <SpacerLarge />
        <main>
          <SearchContainer />
          <SpacerLarge />
          <WatchedItems />
        </main>
      </Container>
    )
  }

  return <>Not signed in</>
}
