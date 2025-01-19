import React from 'react'
import { IoMenu } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";


const NavBar = () => {
  return (
    <div className='w-full px-8 py-2 bg-divColor flex justify-between items-center'>
        <h1 className='text-xl text-fontColor font-bold '>ExpenseTracker</h1>

        <span className='flex items-center justify-end gap-x-4'>
            <span className='rounded-full cursor-pointer text-fontColor p-2 flex justify-center items-center bg-iconBG '><IoMenu /></span>
            <span className='rounded-full cursor-pointer text-fontColor p-2 flex justify-center items-center bg-iconBG '><IoMdNotifications /></span>
            <span className='rounded-full cursor-pointer text-fontColor p-2 flex justify-center items-center bg-iconBG '><FaUser /></span>
            
        </span>
      
    </div>
  )
}

export default NavBar
