import React from 'react'
import { assets } from '../assets/images/assets'

function Home() {
    return (
        <>
            <section id='home' className='w-full h-full flex justify-center relative'>

                <img src={assets.homeimg} alt="image" className='h-screen w-screen object-cover brightness-50' />
                
                <div className='absolute  h-full w-full flex flex-col justify-center items-center md:gap-3 gap-10 libre'>

                    <img src={assets.ashokCh} alt="ashok charkra" className='md:h-50 mb-10 md:mb-0 h-40 md:w-50 w-40 md:mt-7  absolute z-9 animate-[spin_10s_linear_infinite] brightness-150' />
                    <h2 className='sm:text-5xl text-6xl md:text-9xl text-orange-500 z-9 font-extrabold'>Inspire India</h2>
                    <h1 className='sm:text-7xl text-6xl md:text-9xl text-white z-9'>2025</h1>
                    <h1 className='sm:text-3xl text-2xl md:text-4xl text-green-600 z-9'>Powering India's Startup Revolution</h1>
                    <h1 className='sm:text-xl text-1xl md:text-2xl text-white z-9 '>Date: Dec 5-7 | New Delhi | <a href='#register' className='cursor-pointer z-9 text-white hover:text-green-400 hover:border-b-2'>Regiser Now </a></h1>
                    
                </div>
            </section>
        </>
    )
}

export default Home
