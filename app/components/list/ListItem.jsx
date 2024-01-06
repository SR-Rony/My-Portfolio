import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const ListItem = ({text,className,path}) => {
  return (
    <li className={twMerge("",className)}><Link href={`${path}`}>{text}</Link></li>
  )
}

export default ListItem