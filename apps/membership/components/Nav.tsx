import React from 'react'
import Link from 'next/link'

export const Nav = () => {
  return (
    <div className='w-screen bg-[#06070E] text-white top-0 sticky z-10 flex flex-row justify-between items-center py-5 sm:px-32 px-5 '>
      <div>
        <h1 className='text-xl font-black'>
          Rifumo Investments.
        </h1>
      </div>
      <div className='hidden md:flex space-x-5  md:flex-row items-center'>
        <a href="#team">
          Team
        </a>        
        <a href="#about">
          About us
        </a>
        <a className='py-2 px-6 bg-[#5448C8] text-white rounded-lg font-medium'>
          <Link href="/forms/membership" passHref>
            Join Us
          </Link>
        </a>
      </div>
    </div>
  )
}
