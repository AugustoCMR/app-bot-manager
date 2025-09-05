import type { ReactNode } from "react"

interface Props {
  children?: ReactNode
}

export const Background = ({children}: Props) => {
  return (
    <div className='w-screen h-screen bg-zinc-900'>
      {children}
    </div>
  )
}