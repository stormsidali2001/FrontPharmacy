import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
     <div className='h-full min-h-[100vh] w-[100vw] flex items-center justify-center  bg-[#EBFFEF] relative'>
      <Navbar/>
     </div>
  )
}
