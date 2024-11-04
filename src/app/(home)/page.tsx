import {Container} from '@/app/ui/Container'
import {Header} from '@/app/ui/Header'
import {SpacerLarge} from '@/app/ui/Spacer'
import {SearchContainer} from './ui/SearchContainer'
import {WatchedItems} from './ui/WatchedItems'

export default function Home() {
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
