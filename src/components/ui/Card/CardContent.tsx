import React from 'react'

type CardContentProps = {
  title: string
  description: string
}

const CardContent = ({ title, description }: CardContentProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-2xl font-bold'>{title}</h2>
      <hr />
      <span className='text-gray-700'>{description}</span>
    </div>
  )
}

export default CardContent