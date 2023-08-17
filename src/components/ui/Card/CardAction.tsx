import React from 'react'
import { tv } from 'tailwind-variants'

type CardActionProps = React.ComponentProps<'button'> & {
  variant?: 'primary' | 'success' | 'danger'
  children: React.ReactNode
}

const button = tv({
  base: 'h-10 px-2 py-1.5 font-semibold text-white rounded-full bg-zinc-500 hover:bg-zinc-600 transition-all ease-in-out duration-500',
  variants: {
    color: {
      primary: 'bg-sky-500 hover:bg-sky-600',
      success: 'bg-emerald-500 hover:bg-emerald-600',
      danger: 'bg-rose-500 hover:bg-rose-600',
    }
  }
})

const CardAction = ({ className, variant, children, ...props }: CardActionProps) => {
  return (
    <button className={button({ 
      color: variant,
      class: className
      })} 
      {...props}
    >
      {children}
    </button>
  )
}

export default CardAction