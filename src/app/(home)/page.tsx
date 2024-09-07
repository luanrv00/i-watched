'use client'
import {Container, Section} from '../ui'
import {SearchContainer} from './ui'

export default function Home() {
  return (
    <Container>
      <Section>
        <header>
          <h1 className='text-2xl'>I&apos;ve Watched App</h1>
          <p className='text-sm'>
            Track your Animes, TV Series and Movies progress!
          </p>
        </header>
      </Section>
      <Section>
        <main>
          <SearchContainer />
        </main>
      </Section>
    </Container>
  )
}
