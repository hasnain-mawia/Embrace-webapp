// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

export const Slider2 = () => {
  return (
    <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1000,
          reverseDirection:true,
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
        modules={[Autoplay,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={require('../assets/images/Company logo6.png')} /></SwiperSlide>
        <SwiperSlide><img src={require('../assets/images/Company logo7.png')} /></SwiperSlide>
        <SwiperSlide><img src={require('../assets/images/Company logo8.png')} /></SwiperSlide>
        <SwiperSlide><img src={require('../assets/images/Company logo9.png')} /></SwiperSlide>
        <SwiperSlide><img src={require('../assets/images/Company logo10.png')} /></SwiperSlide>
        <SwiperSlide><img src={require('../assets/images/Company logo6.png')} /></SwiperSlide>
        <SwiperSlide><img src={require('../assets/images/Company logo7.png')} /></SwiperSlide>
        <SwiperSlide><img src={require('../assets/images/Company logo8.png')} /></SwiperSlide>
        <SwiperSlide><img src={require('../assets/images/Company logo9.png')} /></SwiperSlide>
        <SwiperSlide><img src={require('../assets/images/Company logo10.png')} /></SwiperSlide>
      
    </Swiper>
  );
};