import React from 'react'

type FieldProps = React.ComponentProps<'div'>

export const Field = (props: FieldProps) => {
  return (
    <div className='flex flex-col gap-1' {...props} />
  )
}
