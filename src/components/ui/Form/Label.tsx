import React from 'react'
import { tv } from 'tailwind-variants'

const labelStl = tv({
  base: 'text-sm font-semibold ml-3',
})

type LabelProps = React.ComponentProps<'label'>

const Label = ({className, ...props}: LabelProps) => {
  return (
    <label className={labelStl({ class: className })} {...props} />
  )
}

export default Label