import React, { useState } from 'react'

function Accordion({title, description}:any) {
    const [accordianOpen, setAccordianOpen] = useState(false);
  return (
    <div className='py-2 flex flex-col text-[18px]'>
        {/* Accordian 1 [start] */}
        <div className='border-t-2  border-gray-300 py-10'>
        <button onClick={() =>setAccordianOpen(!accordianOpen)} className='flex justify-between items-center w-full py-2'>
        <span>{title}</span>
        <span className='bg-[#3461FF] rounded-full text-white w-[20px] h-[20px] text-[25px] flex justify-center items-center'>{!accordianOpen ? "+" : "-" } </span>
        </button>
        <div className={`grid overflow-hidden translate-all duration-300 ease-in-out text-slate-500 ${accordianOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-100'}`}>
       <div className='overflow-hidden'>{description}</div>
        </div>
        </div>
        {/* Accordian 1 [End]*/}
        
    </div>
  )
}

export default Accordion
