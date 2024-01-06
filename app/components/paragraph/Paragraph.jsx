import React from 'react'
import { twMerge } from 'tailwind-merge'

const Paragraph = ({text,className,span}) => {
  return (
    <p className={twMerge("",className)}>{text} <span className='text-praimary'>{span}</span></p>
  )
}

export default Paragraph