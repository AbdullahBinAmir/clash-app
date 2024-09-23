import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function HeroSection() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <div>
        <Image src={"/banner.svg"} height={600} width={600} alt='banner-image' />
      </div>
      <div className='text-center mt-3'>
        <h1 className='text-3xl md:text-5xl lg:text-7xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text'>Clash</h1>
        <p className='text-2xl md:3xl lg:4xl font-bold text-center'>Welcome to the clash app</p>
      </div>
      <Link href={'/login'}>
      <Button className='mt-2'>Login</Button>
      </Link>
    </div>
  )
}

export default HeroSection
