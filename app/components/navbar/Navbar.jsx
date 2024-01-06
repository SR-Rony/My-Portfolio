import React from 'react'
import List from '../list/List'
import ListItem from '../list/ListItem'
import { FaHome,FaUser,FaBriefcase   } from "react-icons/fa";
import { BiSolidMessage } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className='bg-[#17181B] py-10 px-5 absolute top-1/2 right-10 translate-y-[-50%] rounded-lg'>
      <List className='text-gray-500 text-2xl'>
        <ListItem className='my-4 hover:text-white duration-100' path='/' text={<FaHome/>}/>
        <ListItem className='my-4 hover:text-white duration-100' path='/about' text={<FaUser />}/>
        <ListItem className='my-4 hover:text-white duration-100' path='/portfolio' text={<FaBriefcase />}/>
        <ListItem className='my-4 hover:text-white duration-100' path='/contact' text={<BiSolidMessage/>}/>
        <ListItem className='my-4 hover:text-white duration-100' text={<FaHome/>}/>
        <ListItem className='my-4 hover:text-white duration-100' text={<FaHome/>}/>
      </List>
    </nav>
  )
}

export default Navbar