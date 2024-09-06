import type {ReactNode} from 'react'

export function Section({children}: {children: ReactNode}) {
  return <section className='mb-10'>{children}</section>
}
