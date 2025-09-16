import React from 'react'
import {assets ,  dummyEducatorData } from '../../assets/assets'
import { UserButton , useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const educatorData  = dummyEducatorData ; 
  // const { user } = useUser() ;
  const { user, isLoaded } = useUser();


  return (
    <div className='flex items-center justify-between px-4 md:px-8 py-3 border-b border-gray-500 bg-cyan-100/40' >
        <Link to='/'>
        <img src={assets.tmu_skillup} alt="Logo" className='w-20 lg:w-20 '/>
        </Link>
        <div className='flex items-center gap-5 text-black relative'>
        <p>
          Hi! {user? user.fullName : 'Developers' }
        </p>
        {isLoaded && user 
          ? <UserButton /> 
          : <img src={assets.profile_img} alt="Profile" className='max-w-8' />}
        {/* {user? <UserButton/>:  <img src={assets.profile_img} className='max-w-8'/> } */}
        </div>
    </div>
  )
}

export default Navbar
