import {ReactNode} from 'react'
import {LoadingIcon} from '../LoadingIcon'

export function Button({
  children,
  onClick,
  isLoading,
}: {
  children?: ReactNode
  onClick: () => void
  isLoading?: boolean
}) {
  const value = isLoading ? <LoadingIcon /> : children

  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className='bg-lime-200 px-2 rounded'
    >
      {value}
    </button>
  )
}
