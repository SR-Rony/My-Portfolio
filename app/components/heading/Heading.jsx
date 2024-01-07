import React from 'react'
import { twMerge } from 'tailwind-merge'

const Heading = ({text,className,span}) => {
  return (
    <h2 className={twMerge("font-bold",className)}>{text}<span className='text-praimary'>{span}</span></h2>
  )
}

export default Heading