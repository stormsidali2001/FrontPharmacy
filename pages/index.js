import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
     <div className='h-[100vh] w-[100vw] font-mono flex items-center justify-center bg-[#EBFFEF] relative'>
      <Navbar/>
      <div className='flex flex-row space-x-24 px-[40px] items-center justify-center pt-[100px]'>
        <div className='flex flex-col space-y-6 items-center text-left h-full'>
          <div className='text-[35px] text-[#2EAC33]'>Pharmacie Algérienne En Ligne</div>
          <div className='text-[25px] text-[#192226]'>La meilleur pharmacie algérienne en ligne , notre site vous permet de passer une commande tout en restant chez soi et éviter les déplacements. </div>
          <Link href="/listemedicament">
            <button 
              className='h-[35px] text-[22px] w-fit px-4 rounded-md shadow-lg bg-[#2EAC33]/80 hover:bg-[#2EAC33] text-white flex flex-row items-center justify-center space-x-4'
            >
              Médicaments
            </button>
          </Link>
        </div>
        <img src="/home.png"/>
      </div>
     </div>
  )
}
