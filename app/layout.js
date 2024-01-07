import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {/* <Header/> */}
          <Navbar/>
          {children}
        </body>
    </html>
  )
}
