import React from 'react'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <footer className='bg-cyan-100/30 md:px-36 text-left w-full mt-10' >
      <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-black/30'>
        <div className='flex flex-col md:items-start items-center w-full'>
          <img className='h-14' src={assets.tmu_skillup} alt="logo"  />
          <p className='mt-2 text-center md:text-left text-sm'
          > <br /> TMU-SKILLUP aims to provide a seamless learning experience.</p>

        </div>
        <div className='flex flex-col md:items-start items-center w-full'>
          <h2 className='font-semibold mb-5'>Company</h2>
          <ul className=' flex md:flex-col w-full justify-between text-sm md:space-y-2'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      <div className='hidden md:flex flex-col items-start w-full'>
<h2 className='font-semibold  mb-5'>Subscribe to our newsletter</h2>
<p className='text-sm '>The latest news, articles, and resources, sent to your inbox weekly.</p>

<div className='flex items-center gap-2 pt-4'>
<input type="email" placeholder='Enter your email' className='border border-gray-500/30  text-gray-500  outline-none w-64 h-9 rounded px-2 text-sm'/>

<button className='bg-blue-600 text-white w-24 h-9  rounded'>Subscribe</ button>
        </div>
        </div>
      </div>
      <p className='py-4 text-center text-xs md:text-sm'>Copyright 2025 © TMU-SKILLUP &nbsp; - &nbsp; All Right Reserved</p>
    </footer>
  )
}

export default Footer
