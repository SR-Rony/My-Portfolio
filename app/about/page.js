import React from 'react'
import Container from '../components/container/Container'
import Heading from '../components/heading/Heading'
import Paragraph from '../components/paragraph/Paragraph'

const page = () => {
  return (
    <section className='text-white'>
      <Container>
          <Heading className='text-3xl border-b-2 border-praimary pb-2 pt-10' text='My About'/>
        <div className='grid grid-cols-12 items-center gap-5'>
          <div className='col-span-10'>
            <Heading className='text-xl py-5' text="I'm SR Rony, a" span=' Web Developer'/>
            <Paragraph text="I'm a passionate and highly skilled web developer with a deep appreciation for the ever-evolving digital landscape. I thrive on the creative challenges that web development presents and am dedicated to crafting exceptional online experiences that captivate and engage users.

            With a strong foundation in both front-end and back-end development, I'm equipped to handle the complete lifecycle of web projects. My expertise lies in harnessing the power of HTML, CSS, and JavaScript to create stunning and responsive user interfaces. I also excel in back-end technologies, using languages like Node js, Express js mongo DB ,Firebase, and databases build robust, secure, and efficient web applications.In a constantly changing field like web development, I'm dedicated to continuous learning and staying up-to-date with the latest trends, tools, and frameworks. My goal is to not only meet but exceed your web development needs, whether it's for your business, personal project, or organization.
            
            I thrive on collaboration and believe in the power of teamwork to bring innovative ideas to life. I'm here to help you transform your vision into a functional, visually appealing, and secure digital reality. Let's work together to create something amazing on the web."/>
          </div>
          {/* <div className='col-span-4'>
              name
          </div> */}
        </div>
      </Container>
    </section>
  )
}

export default page