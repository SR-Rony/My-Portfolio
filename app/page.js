import Image from "next/image";
import Container from "./components/container/Container";
import Paragraph from "./components/paragraph/Paragraph";
import img from '@/public/images/SR Rony.jpg'
import Button from "./components/button/Button";


export default function Home() {
  return (
    <main className="text-white h-screen">
      <Container>
        <div className="flex justify-center items-center h-screen">
            <div>
            <Image className="w-52 h-52 rounded-full object-cover mx-auto ring-4 ring-praimary" src={img} alt="img"
            />
              <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-3"> Hello! I’m <span className="text-praimary">SR Rony</span></h1>
              <Paragraph className='text-xl md:text-2xl font-medium text-center' text='I’m' span='Web Developer'/>
              <div className="flex gap-4 mt-4 justify-center">
                <Button text='Contact Me'/>
                <Button text='Dawonlod CV'/>
              </div>
            </div>
        </div>
      </Container>
    </main>
  )
}
