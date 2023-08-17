import React from 'react'
import { tv } from 'tailwind-variants';

type BaseButtonProps = React.ComponentProps<'button'> & {
  variant?: 'primary' | 'success' | 'danger'
  children: React.ReactNode
}

const buttonStl = tv({
  base: [
    'h-10', 'px-2', 'py-1.5',
    'font-semibold', 'text-white', 'rounded-full',
    'transition-all', 'ease-in-out', 'duration-500'
  ],
  variants: {
    color: {
      primary: 'bg-zinc-500 hover:bg-zinc-600',
      success: 'bg-emerald-500 hover:bg-emerald-600',
      danger: 'bg-rose-500 hover:bg-rose-600',
    }
  }
})

const BaseButton = ({variant='primary', className, children, ...props}: BaseButtonProps) => {
  return (
    <button 
      className={buttonStl({ color: variant, class: className })}
      {...props}
    >
      {children}
    </button>
  )
}

export default BaseButton