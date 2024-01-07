import React from 'react'
import Container from '../container/Container'
import Heading from '../heading/Heading'

const Header = () => {
  return (
    <header className='py-2'>
        <Container>
            <div className='flex justify-between items-center'>
                <Heading className='text-2xl font-bold w-10 h-10 bg-white text-praimary rounded-full flex justify-center items-center' text='SR'/>
            </div>
        </Container>
    </header>
  )
}

export default Header