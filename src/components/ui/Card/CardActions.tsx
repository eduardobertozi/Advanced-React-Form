import React from 'react'

type CardActionsProps = {
  children: React.ReactNode
}

const CardActions = ({ children }: CardActionsProps) => {
  return (
    <div className='flex items-center gap-2'>{children}</div>
  )
}

export default CardActions