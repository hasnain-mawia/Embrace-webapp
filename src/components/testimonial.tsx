import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import 'swiper/css';

// Import required modules
import { Autoplay, Navigation } from 'swiper/modules';

export default function Testimonial() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next-modified',
          prevEl: '.swiper-button-prev-modified'
      }}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter:true,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='p-5 space-y-2'>
            <div className='flex gap-4 items-center'>
            <img src={require('../assets/images/testimonial1.png')} alt=""/>
              <div>
              <h3 className='text-[22px] font-semibold'>Amelia Joseph</h3>
              <p>Cheif Manager</p>
              </div> 
            </div>
              <p>My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.</p> 
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='p-5 space-y-2'>
            <div className='flex gap-4 items-center'>
            <img src={require('../assets/images/testimonial2.png')} alt=""/>
              <div>
              <h3 className='text-[22px] font-semibold'>Jacob Joshua</h3>
              <p>Cheif Manager</p>
              </div> 
            </div>
              <p>My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.</p> 
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='p-5 space-y-2'>
            <div className='flex gap-4 items-center'>
            <img src={require('../assets/images/testimonial3.png')} alt=""/>
              <div>
              <h3 className='text-[22px] font-semibold'>Jacob Joshua</h3>
              <p>Cheif Manager</p>
              </div> 
            </div>
              <p>My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.</p> 
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='p-5 space-y-2'>
            <div className='flex gap-4 items-center'>
            <img src={require('../assets/images/testimonial2.png')} alt=""/>
              <div>
              <h3 className='text-[22px] font-semibold'>Amelia Joseph</h3>
              <p>Cheif Manager</p>
              </div> 
            </div>
              <p>My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.</p> 
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
