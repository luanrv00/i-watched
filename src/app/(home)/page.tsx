'use client'
import {Container, Section, Header, Spacer, SpacerLarge} from '../ui'
import {SearchContainer, WatchedItems} from './ui'

export default function Home() {
  return (
    <Container>
      <Header />
      <SpacerLarge/>
      <main>
        <SearchContainer />
        <SpacerLarge/>
        <WatchedItems />
      </main>
    </Container>
  )
}
