import React from 'react'
import { twMerge } from 'tailwind-merge'

const Heading = ({text,className}) => {
  return (
    <h2 className={twMerge("font-bold",className)}>{text}</h2>
  )
}

export default Heading