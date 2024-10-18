'use client'
import {Container, Section, Header} from '../ui'
import {SearchContainer, WatchedItems} from './ui'

export default function Home() {
  return (
    <Container>
      <Section>
        <Header />
      </Section>
      <Section>
        <main>
          <SearchContainer />
          <WatchedItems />
        </main>
      </Section>
    </Container>
  )
}
