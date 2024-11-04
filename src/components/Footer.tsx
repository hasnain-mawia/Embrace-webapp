import React from 'react'

function Footer() {
  return (
    <>
    <div className='max-w-[1550px] mx-auto '>
    <div className="grid grid-cols-1 sm:grid-cols-2 items-center py-[50px]">
        <div className='flex'>
        <div className='space-y-10'>
        <img className='w-[180px]' src={require('../assets/images/logo.png')} alt="" />
          <div className='flex space-x-8 justify-center'>
        <img className='w-[20px]' src={require('../assets/images/instagram.png')} alt="" />
        <img className='w-[20px]' src={require('../assets/images/twitter.png')} alt="" />
        <img className='w-[20px]' src={require('../assets/images/facebook.png')} alt="" />
          </div>
          <button className=' mx-auto text-[22px] flex item-center gap-2 bg-[#3461FF] hover:text-white text-[#fff] py-3 px-5 rounded-full hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-100'>Contact Us</button>
        </div>
        </div>
        <div className='grid grid-cols-3 justify-between text-[18px]'>
          <div className='flex flex-col space-y-10'>
            <a className=" hover:text-[#3461FF]" href="">Work With Us</a>
            <a className=" hover:text-[#3461FF]" href="">Advertise With Us</a>
            <a className=" hover:text-[#3461FF]" href="">Support Us</a>
            <a className=" hover:text-[#3461FF]" href="">Bussiness Advices</a>
          </div>
          <div className='flex flex-col space-y-10'>
            <a className="hover:text-[#3461FF]" href="">Private Coaching</a>
            <a className="hover:text-[#3461FF]" href="">Our Work</a>
            <a className="hover:text-[#3461FF]" href="">Our Commitment</a>
            <a className="hover:text-[#3461FF]" href="">Our Team</a>
          </div>
          <div className='flex flex-col space-y-10'>
            <a className="hover:text-[#3461FF]" href="">About Us</a>
            <a className="hover:text-[#3461FF]" href="">FAQ's</a>
            <a className="hover:text-[#3461FF]" href="">Report a Bug</a>
          </div>
        </div>
      </div>
    </div>
    <div className='bg-[#f4f4f4] mt-10'>    
        <div className='bg-[#0a0a0a] p-4 text-center text-white'>
            <div className='max-w-[1550px] mx-auto flex justify-between items-center py-7'>
            <a className='text-white text-[15px]' href="#">© 2024 - Embrance. Design & Developed by Hasnain mawia</a>
            <div className='space-x-10'>
            <a className='text-white text-[15px]' href="#">Terms of use</a>
            <a className='text-white text-[15px]' href="#">Privacy Policy</a>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
