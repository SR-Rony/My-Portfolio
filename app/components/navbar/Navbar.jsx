import React from 'react'
import List from '../list/List'
import ListItem from '../list/ListItem'
import { FaHome,FaUser,FaBriefcase   } from "react-icons/fa";
import { BiSolidMessage } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className='bg-[#17181B] absolute w-full sm:w-0 py-3 px-5 sm:py-0 sm:px-0 bottom-0 right-1/2 translate-x-1/2 sm:bottom-1/2 sm:right-20 sm:translate-y-1/2 rounded-lg z-50'>
      <List className='text-white text-xl flex sm:block justify-center items-center gap-10 sm:gap-0'>
        <ListItem className='my-0 sm:my-5 hover:text-praimary duration-100' path='/' text={<FaHome/>}/>
        <ListItem className='my-0 sm:my-5 hover:text-praimary duration-100' path='/about' text={<FaUser />}/>
        <ListItem className='my-0 sm:my-5 hover:text-praimary duration-100' path='/portfolio' text={<FaBriefcase />}/>
        <ListItem className='my-0 sm:my-5 hover:text-praimary duration-100' path='/contact' text={<BiSolidMessage/>}/>
        <ListItem className='my-0 sm:my-5 hover:text-praimary duration-100' text={<FaHome/>}/>
        <ListItem className='my-0 sm:my-5 hover:text-praimary duration-100' text={<FaHome/>}/>
      </List>
    </nav>
  )
}

export default Navbar