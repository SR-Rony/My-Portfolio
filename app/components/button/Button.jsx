import React from 'react'
import { twMerge } from 'tailwind-merge'

const Button = ({text,className}) => {
  return (
    <button className={twMerge("text-base text-praimary rounded-sm px-5 py-2 ring ring-praimary  hover:text-white duration-100 relative after:absolute after:top-0 after:left-0 after:w-0 after:h-full after:bg-praimary after:-z-10 hover:after:w-full after:duration-200",className)}>{text}</button>
  )
}

export default Button