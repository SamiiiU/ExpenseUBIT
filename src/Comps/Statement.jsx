import React, { useState } from 'react'
import { MdEdit, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoTrashBinSharp } from "react-icons/io5";
import { AnimatePresence , motion } from 'framer-motion';


// return (
//  <div className='w-full  px-4 sm:px-16 md:px-28 2xl:px-48 py-10 flex flex-col gap-10 text-center items-center '>
//     <h1 className='2xl:text-[3rem] text-[2.5rem] font-[800]'>Frequently  Asked <span className='text-[#207CE7]'> Question  </span>and<span className='text-[#207CE7]'> Answers </span> </h1>
//     <p className='2xl:text-xl text-lg font-normal text-[#0b1720] '>{para || "See how Articize improves the KPIs that drive actual business growth"}</p>
 

//  </div>
// )
const Statement = () => {
    const [showKeyIndex , setshowKeyIndex] = useState(null)


const toggleShowKeyDetail = (idx) =>{
    
    setshowKeyIndex(showKeyIndex === idx ? null : idx)
}

  return (
    <div className=' my-8 px-8 text-fontColor'>
        <span className='flex justify-between items-center'>
            
       <h1 className='font-semibold mb-4 text-xl'>History </h1>
       <p className='font-mono text-blue'>Filter By</p>
        </span>

            
        <div className='w-full flex flex-wrap items-center gap-4 rounded-lg overflow-hidden ' >

        <div  id='1' className='w-full h-fit  ' >
            {/* strip  */}
            <div className='w-full  px-6 py-3  bg-divColor  flex justify-between' onMouseDown={() => toggleShowKeyDetail(1)}>
                <h1 className='text-lg'>Title</h1>
                <h1 className='text-lg'>20$</h1>

            </div>
        
        <AnimatePresence>
        {showKeyIndex && (
        
            <motion.div
            initial={{ transformOrigin: 'top', scaleY: 0 }} // Start with height 0
            animate={{ scaleY: 1 }} // Expand to full height when state is true
            exit={{ scaleY: 0 }} // Smooth collapse on exit
            transition={{ duration: 1 }} // Smooth transition
            id="whyKey"
            className="p-4 overflow-hidden font-serifs  transition-all  bg-divColor"
        >
            <div className='p-4 bg-darkBG rounded-md'>
                <h1>"This Money I spend on my rent"</h1>
                <span className="flex items-center justify-end gap-x-4">
                <span className="rounded-full cursor-pointer text-fontColor p-2 flex justify-center items-center bg-iconBG">
                    <MdEdit />
                </span>
                <span className="rounded-full cursor-pointer text-fontColor p-2 flex justify-center items-center bg-iconBG">
                    <IoTrashBinSharp />
                </span>
                </span>
            </div>
        </motion.div>
        

        )}
        </AnimatePresence>  

        </div>

        </div>  
        </div>
  )
}

export default Statement
