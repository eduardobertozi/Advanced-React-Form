import React from 'react'
import { tv } from 'tailwind-variants'

const formStl = tv({
  base: 'flex flex-col gap-4 w-full'
})

type RootProps = React.ComponentProps<'form'> & {
  children: React.ReactNode
}

export const Root = ({ children, ...props }: RootProps) => {
  return (
    <form className={formStl()} {...props}>
      {children}
    </form>
  )
}