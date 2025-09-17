import React from 'react'
import {assets } from '../../assets/assets'
import { UserButton , useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom';
import Loading from '../student/Loading';

const Navbar = () => {
  // const { user } = useUser() ;
  const { user, isLoaded } = useUser();


  return (
    <div className='flex items-center justify-between px-4 md:px-8 py-3 border-b border-gray-500 bg-cyan-100/40' >
        <Link to='/'>
        <img src={assets.tmu_skillup} alt="Logo" className='w-20 lg:w-20 '/>
        </Link>
        <div className='flex items-center gap-5 text-black relative'>
        <p>
  Hi! {isLoaded && user ? (user.fullName || user.firstName) : "Guest"}
</p>

        {/* <p>
    Hi! {user?.fullName || user?.firstName || 'Developers'}
        </p> */}
{isLoaded ? (
  user ? (
    <UserButton />
  ) : (
    <img src={assets.profile_img} alt="Profile" className="max-w-8" />
  )
) : <Loading/>}

        </div>
    </div>
  )
}

export default Navbar
