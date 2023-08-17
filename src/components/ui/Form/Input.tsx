'use client'

import { config } from 'process'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import { tv } from 'tailwind-variants'

const inputStl = tv({
  base: 'w-full h-10 px-4 py-1 border border-gray-300 focus:outline outline-violet-500 rounded-full',
  variants: {
    style: {
      normal: '',
      file: 'h-auto border-0 p-0 file:rounded-full file:border-0 file:bg-zinc-400 file:text-white file:px-4 file:h-10 text-sm'
    }
  }
})

type InputProps = React.ComponentProps<'input'> & {
  name: string
}

export const Input = ({ className, ...props}: InputProps) => {
  const { register } = useFormContext()
  
  return (
    <input 
      id={props.name}
      className={inputStl({ 
        style: props.type === 'file' ? 'file' : 'normal',
        class: className
      })}
      {...register(props.name)}
      {...props} 
    />
  )
}
