import React from 'react'

function Header() {
  return (
    <>
    <div className='border-b-[1px] border-[#e0e0e0] sticky top-0 bg-white py-3 shadow-lg z-20'>
      <div className='max-w-[1550px] mx-auto'>
        <div className='flex item-center justify-between'>
          <div><img className='w-[180px]' src={require('../assets/images/logo.png')} alt="" /></div>
          <div className='flex items-center'>
            <ul className='flex items-center gap-2'>
              <li className='p-2 rounded-md hover:hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-100 hover:text-white'><a href="#">How Its Works</a></li>
              <li className='p-2 rounded-md hover:hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-100 hover:text-white'><a href="#">Our Works</a></li>
              <li className='p-2 rounded-md hover:hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-100 hover:text-white'><a href="#">Pricing</a></li>
              <li className='p-2 rounded-md hover:hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-100 hover:text-white'><a href="#">About us</a></li>
            </ul>
          </div>
          <div>
            <button className='bg-[#3461FF] px-[24px] py-[16px] rounded-full text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-100'>Book A Call</button>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Header
