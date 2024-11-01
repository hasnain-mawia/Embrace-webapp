import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import 'swiper/css';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1000,
          pauseOnMouseEnter:true,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={require('../assets/images/Company logo.png')}/></SwiperSlide>
        <SwiperSlide><img src={require('../assets/images/Company logo2.png')}/></SwiperSlide>
        <SwiperSlide><img src={require('../assets/images/Company logo3.png')}/></SwiperSlide>
        <SwiperSlide><img src={require('../assets/images/Company logo4.png')}/></SwiperSlide>
        <SwiperSlide><img src={require('../assets/images/Company logo5.png')}/></SwiperSlide> 
        <SwiperSlide><img src={require('../assets/images/Company logo.png')}/></SwiperSlide> 
        <SwiperSlide><img src={require('../assets/images/Company logo2.png')}/></SwiperSlide> 
        <SwiperSlide><img src={require('../assets/images/Company logo3.png')}/></SwiperSlide> 
        <SwiperSlide><img src={require('../assets/images/Company logo4.png')}/></SwiperSlide> 
        <SwiperSlide><img src={require('../assets/images/Company logo5.png')}/></SwiperSlide> 
        
      </Swiper>
    </>
  );
}
