import type {ReactNode} from 'react'
import { Spacer } from '../Spacer'

export function Container({children}: {children: ReactNode}) {
  return (
    <>
      <Spacer/>
      <div className='container px-5'>{children}</div>
      <Spacer/>
    </>
  )
}
