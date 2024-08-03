"use client"
import React, { ReactEventHandler } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const HeroSection = () => {
    const router = useRouter()

  return (
    <div>
    <div className='flex flex-col mx-16 items-center mt-[100px] gap-6 pb-6'>
        <span className='font-bold text-3xl text-center'>
            Protect your inbox from<span className='text-customRed'> online frauds!</span>
        </span>
        <p className='text-center text-2xl sm:w-[430px] w-[370px]'>
            Feeling Overwhelmed? Our AI phishing detector will help you
            detect emails sent by hackers and protect you from online frauds.
        </p>
        <button
           onClick={() => router.push('/login')}
           className={`block text-sm font-light rounded-lg px-9 py-3 text-white transition bg-customRed focus:outline-none`}
           type='button'
        >
            {'Let get started'}
        </button>
    </div>
    </div>
  )
}

export default HeroSection