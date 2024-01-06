import React from 'react'
import { twMerge } from 'tailwind-merge'

const Button = ({text,className}) => {
  return (
    <button className={twMerge("text-base text-praimary rounded-sm px-5 py-2 md:px-7 md:py-3 ring ring-praimary hover:bg-praimary hover:text-white duration-100",className)}>{text}</button>
  )
}

export default Button