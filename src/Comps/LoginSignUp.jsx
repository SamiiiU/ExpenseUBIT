import React, { useEffect, useState } from 'react'

const LoginSignUp = () => {
    const [switche , setSwitche] = useState(false)

    const handleSwitche = () => {
        console.log(switche , "clg")
            setSwitche(!switche)
    }

    useEffect(() => {
        handleSwitche()
    } , [])
  return (
    <div className='w-full flex h-screen justify-center items-center flex-col text-fontColor bg-darkBG text-center'>
        <h1 className='font-bold text-5xl mb-5'>Expense Tracker</h1>

        {/* //bullet to switch */}

        <div  className=' relative flex justify-center w-60 mb-10 rounded-full  bg-divColor items-center cursor-pointer'>
            <span onClick={handleSwitche} className={`w-1/2 h-full absolute rounded-full duration-300 transition-all ${switche ? 'right-0' : 'left-0'} bg-blue`}/>
            <span className='rounded-full flex-1 px-5 py-3  font-semibold z-20'>Login</span>
            <span className='rounded-full flex-1 px-5 py-3 font-semibold z-20'>SignUp</span>

        </div>

        <div className='md:w-[500px] relative w-full overflow-hidden  '>
            <div className='w-fit transition-all -translate-x-1/2 flex'>
                {/* Login items  */}
             <div className='flex flex-col gap-4 md:w-[500px] bg-divColor p-4 rounded-md'>
            <span className='flex flex-col gap-y-2 text-left mb-4'>
                <h1 className="font-semibold text-lg ">Email</h1>
                <input
                type="text"
                placeholder="Enter Your Title"
                className="bg-iconBG w-full p-2 outline-none border-none rounded-md"
                />    
            </span>

            <span className='flex flex-col gap-y-2 text-left'>
                <h1 className="font-semibold text-lg ">Password</h1>
                <input
                type="password"
                placeholder="Enter Your Title"
                className="bg-iconBG w-full p-2 outline-none border-none rounded-md"
                />    
            </span> 

            <span className='w-full '>
                <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-blue-500" />
                <span className="text-base font-medium underline">Forget Password?</span>
                </label>  
            </span>

            <div className='w-full curs mt-8 flex justify-center items-center'>
            <h1 className='bg-blue cursor-pointer font-semibold md:px-40 py-2 md:w-auto w-full text-center rounded-md '> Login </h1>
            </div>
            
            </div>

            {/* SignUp Items  */}
            <div className='flex  transition-all flex-col gap-4 md:w-[500px] bg-divColor p-4 rounded-md'>
                <span className='flex flex-col gap-y-2 text-left mb-4'>
                    <h1 className="font-semibold text-lg ">Email</h1>
                    <input
                    type="text"
                    placeholder="Enter Your Title"
                    className="bg-iconBG w-full p-2 outline-none border-none rounded-md"
                    />    
                </span>

                <span className='flex flex-col gap-y-2 text-left'>
                    <h1 className="font-semibold text-lg ">Password</h1>
                    <input
                    type="password"
                    placeholder="Enter Your Title"
                    className="bg-iconBG w-full p-2 outline-none border-none rounded-md"
                    />    
                </span> 

                <span className='w-full '>
                    <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-blue-500" />
                    <span className="text-base font-medium underline">Forget Password?</span>
                    </label>  
                </span>

                <div className='w-full curs mt-8 flex justify-center items-center'>
                <h1 className='bg-blue cursor-pointer font-semibold md:px-40 py-2 md:w-auto w-full text-center rounded-md '> Login </h1>
                </div>
                
            </div>
            </div>
        </div>



    </div>
  )
}

export default LoginSignUp
