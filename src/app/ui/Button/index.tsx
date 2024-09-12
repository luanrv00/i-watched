import {ReactNode} from 'react'

export function Button({
  children,
  onClick,
}: {
  children: ReactNode
  onClick: () => void
}) {
  return (
    <button onClick={onClick} className='bg-lime-200 px-2 rounded'>
      {children}
    </button>
  )
}
