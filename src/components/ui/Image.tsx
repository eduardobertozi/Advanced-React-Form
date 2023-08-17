import Image from 'next/image'
import { ComponentProps } from 'react'

type ImageProps = ComponentProps<typeof Image>

const CustomImage = async ({ ...props }: ImageProps) => {
  return (
    <Image 
      loading='lazy' 
      {...props} 
      alt={props.alt || '...'}
    />
  )
}

export default CustomImage