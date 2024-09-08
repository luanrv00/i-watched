import {ReactNode} from 'react'

export function Button({children}: {children: ReactNode}) {
  return <button className='bg-lime-200 px-2 rounded'>{children}</button>
}
