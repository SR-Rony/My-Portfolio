import React from 'react'
import Container from '../components/container/Container'
import Heading from '../components/heading/Heading'
import {FaBriefcase   } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import Link from 'next/link';
import Image from 'next/image';
import Paragraph from '../components/paragraph/Paragraph';
import hockey from '@/public/images/hockey.png'
import photography from '@/public/images/slider.jpg'
import fast from '@/public/images/fast-jaw.png'
import linkdin from '@/public/images/linkdin.jpg'
import chatting from '@/public/images/chatting.jpg'
import Ecommerce from '@/public/images/Ecommerce.png'

const page = () => {
  return (
    <section>
      <Container>
        <div className='flex justify-between items-center  border-b-2 border-dashed text-white border-praimary pb-2 pt-10'>
            <Heading className='text-3xl' text='My Portfolio'/>
            <FaBriefcase className='text-5xl' />
          </div>
          <div className='text-center mt-7'>
                <div className='grid grid-cols-12 gap-5 my-5'>
                    <div className={`col-span-12 md:col-span-4 h-80 cursor-pointer relative group rounded-md overflow-hidden`}>
                        <Link target="_blank" href='https://hockey-six.vercel.app/'>
                        <Image className='h-full w-full group-hover:scale-110 duration-100 object-cover' src={hockey} alt='img'/>
                        <div className='hidden group-hover:flex justify-center items-center absolute top-0 left-0 w-full h-full hover:bg-black opacity-50 text-white z-20'>
                            <div className='text-center'>
                                <IoMdEye className='text-white text-2xl text-center inline-block'/>
                                <Paragraph text='Vew project'/>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className={`col-span-12 md:col-span-4 h-80 cursor-pointer relative group rounded-md overflow-hidden`}>
                        <Link target="_blank" href='https://photography-b7rb.vercel.app/'>
                        <Image className='h-full w-full group-hover:scale-110 duration-100 object-cover' src={photography} alt='img'/>
                        <div className='hidden group-hover:flex justify-center items-center absolute top-0 left-0 w-full h-full hover:bg-black opacity-50 text-white z-20'>
                            <div className=''>
                                <IoMdEye className='text-white text-2xl text-center inline-block'/>
                                <Paragraph text='Vew project'/>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className={`col-span-12 md:col-span-4 h-80 cursor-pointer relative group rounded-md overflow-hidden`}>
                        <Link target="_blank" href='https://fast-jao.vercel.app/'>
                        <Image className='h-full w-full group-hover:scale-110 duration-100 object-cover' src={fast} alt='img'/>
                        <div className='hidden group-hover:flex justify-center items-center absolute top-0 left-0 w-full h-full hover:bg-black opacity-50 text-white z-20'>
                            <div className=''>
                                <IoMdEye className='text-white text-2xl text-center inline-block'/>
                                <Paragraph text='Vew project'/>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className='grid grid-cols-12 gap-5 my-5'>
                    <div className={`col-span-12 md:col-span-4 h-80 cursor-pointer relative group rounded-md overflow-hidden`}>
                        <Link target="_blank" href='https://linkedin-7nz6.vercel.app/'>
                        <Image className='h-full w-full group-hover:scale-110 duration-100 object-cover' src={linkdin} alt='img'/>
                        <div className='hidden group-hover:flex justify-center items-center absolute top-0 left-0 w-full h-full hover:bg-black opacity-50 text-white z-20'>
                            <div className=''>
                                <IoMdEye className='text-white text-2xl text-center inline-block'/>
                                <Paragraph text='Vew project'/>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className={`col-span-12 md:col-span-4 h-80 cursor-pointer relative group rounded-md overflow-hidden`}>
                        <Link target="_blank" href='https://chatting-application-six.vercel.app/'>
                        <Image className='h-full w-full group-hover:scale-110 duration-100 object-cover' src={chatting} alt='img'/>
                        <div className='hidden group-hover:flex justify-center items-center absolute top-0 left-0 w-full h-full hover:bg-black opacity-50 text-white z-20'>
                            <div className=''>
                                <IoMdEye className='text-white text-2xl text-center inline-block'/>
                                <Paragraph text='Vew project'/>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className={`col-span-12 md:col-span-4 h-80 cursor-pointer relative group rounded-md overflow-hidden`}>
                        <Link target="_blank" href='https://orebi-ecommerce-sigma.vercel.app/?fbclid=IwAR1DPQ37UOLRGTIa1Qu1jKybV2pcBYDYH2mIZCKOXd4eX1rr3pmFtKmKV-o'>
                        <Image className='h-full w-full group-hover:scale-110 duration-100 object-cover' src={Ecommerce} alt='img'/>
                        <div className='hidden group-hover:flex justify-center items-center absolute top-0 left-0 w-full h-full hover:bg-black opacity-50 text-white z-20'>
                            <div className=''>
                                <IoMdEye className='text-white text-2xl text-center inline-block'/>
                                <Paragraph text='Vew project'/>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
      </Container>
    </section>
  )
}

export default page