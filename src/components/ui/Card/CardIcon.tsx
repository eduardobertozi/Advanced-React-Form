import React from 'react'

type CardIconProps = {
  icon: React.ElementType
}

const CardIcon = ({ icon: Icon }: CardIconProps) => {
  return (
    <div className='flex items-center justify-center w-12 h-12 rounded-full border-2 border-violet-600'>
      <Icon className='w-6 min-w-6 h-6 min-h-6 text-violet-600' />
    </div>
  )
}

export default CardIcon