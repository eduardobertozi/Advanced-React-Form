import React from 'react'
import { tv } from 'tailwind-variants'

type CardRootProps = React.ComponentProps<'div'> & {
  children: React.ReactNode
}

const div = tv({
  base: [
    'flex', 'items-center', 'justify-center', 'gap-8',
    'w-full', 'min-h-96', 'p-4', 'bg-zinc-50',
    'rounded-2xl', 'shadow-lg'
  ]
})

const CardRoot = ({ className, children }: CardRootProps) => {
  return (
    <div className={div({class: className})}>{children}</div>
  )
}

export default CardRoot