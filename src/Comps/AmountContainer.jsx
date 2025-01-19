import React from 'react'
import { FiTrendingUp } from "react-icons/fi";


const AmountContainer = () => {
  return (
    <div className=' my-8 px-8 text-fontColor'>
       <h1 className='font-semibold mb-4 text-xl'>Financial Overview</h1>
      <div className='w-full flex flex-wrap items-center gap-4  '>
        <div className='md:flex-1 w-full px-6 py-3 rounded-md bg-divColor'>
            <span className='flex font-semibold items-center gap-x-4 text-xl'>$ Total Balance</span>
            <h1 className='mt-2 font-bold text-2xl'>0.00$</h1>
        </div>

        <div className='md:flex-1 w-full px-6 py-3 rounded-md bg-divColor'>
            <span className='flex font-semibold text-green items-center gap-x-4 text-xl'><FiTrendingUp /> Income</span>
            <h1 className='mt-2 font-bold text-2xl'>0.00$</h1>
        </div>

        <div className='md:flex-1 w-full px-6 py-3 rounded-md bg-divColor'>
            <span className='flex font-semibold text-red items-center gap-x-4 text-xl'><FiTrendingUp className='transform rotate-180'/> Expense</span>
            <h1 className='mt-2 font-bold text-2xl'>0.00$</h1>
        </div>
      
    </div>
    </div>
  )
}

export default AmountContainer
