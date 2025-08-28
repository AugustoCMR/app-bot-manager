import type { ReactNode } from "react"

interface Props {
  children?: ReactNode
}

export const Background = ({children}: Props) => {
  return (
    <div className='bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-700 w-screen h-screen'>
      {children}
    </div>
  )
}