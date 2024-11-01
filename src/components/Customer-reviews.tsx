// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination,FreeMode} from 'swiper/modules';
import { FaStar } from "react-icons/fa";


// Import Swiper styles
import 'swiper/css';

export const CustomerReview = () => {
  return (
    <Swiper
    slidesPerView={3}
    spaceBetween={30}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    autoplay={{
        delay: 1500,
        disableOnInteraction: true,
      }}
    modules={[FreeMode, Pagination, Autoplay]}
    className="mySwiper"
  >
        <SwiperSlide>
          <div className='bg-[#f2f2f2] p-10 rounded-[10px] flex flex-col gap-4'>
          "I'm always a bit skeptical when ordering clothes online, but Chase Value exceeded my expectations! The shipping was fast, the packaging was nice, and the clothes were even better in person. Definitely recommend giving them a try."
        <div className='flex items-center text-[orange] text-[20px] gap-1'>
        <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
        </div>
        <p>-Shomaila Faheem</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-[#f2f2f2] p-10 rounded-[10px] flex flex-col gap-4'>
          "I'm always a bit skeptical when ordering clothes online, but Chase Value exceeded my expectations! The shipping was fast, the packaging was nice, and the clothes were even better in person. Definitely recommend giving them a try."
        <div className='flex items-center text-[orange] text-[20px] gap-1'>
        <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
        </div>
        <p>-Shomaila Faheem</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-[#f2f2f2] p-10 rounded-[10px] flex flex-col gap-4'>
          "I'm always a bit skeptical when ordering clothes online, but Chase Value exceeded my expectations! The shipping was fast, the packaging was nice, and the clothes were even better in person. Definitely recommend giving them a try."
        <div className='flex items-center text-[orange] text-[20px] gap-1'>
        <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
        </div>
        <p>-Shomaila Faheem</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-[#f2f2f2] p-10 rounded-[10px] flex flex-col gap-4'>
          "I'm always a bit skeptical when ordering clothes online, but Chase Value exceeded my expectations! The shipping was fast, the packaging was nice, and the clothes were even better in person. Definitely recommend giving them a try."
        <div className='flex items-center text-[orange] text-[20px] gap-1'>
        <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
        </div>
        <p>-Shomaila Faheem</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-[#f2f2f2] p-10 rounded-[10px] flex flex-col gap-4'>
          "I'm always a bit skeptical when ordering clothes online, but Chase Value exceeded my expectations! The shipping was fast, the packaging was nice, and the clothes were even better in person. Definitely recommend giving them a try."
        <div className='flex items-center text-[orange] text-[20px] gap-1'>
        <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
        </div>
        <p>-Shomaila Faheem</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-[#f2f2f2] p-10 rounded-[10px] flex flex-col gap-4'>
          "I'm always a bit skeptical when ordering clothes online, but Chase Value exceeded my expectations! The shipping was fast, the packaging was nice, and the clothes were even better in person. Definitely recommend giving them a try."
        <div className='flex items-center text-[orange] text-[20px] gap-1'>
        <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
        </div>
        <p>-Shomaila Faheem</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-[#f2f2f2] p-10 rounded-[10px] flex flex-col gap-4'>
          "I'm always a bit skeptical when ordering clothes online, but Chase Value exceeded my expectations! The shipping was fast, the packaging was nice, and the clothes were even better in person. Definitely recommend giving them a try."
        <div className='flex items-center text-[orange] text-[20px] gap-1'>
        <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
        </div>
        <p>-Shomaila Faheem</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-[#f2f2f2] p-10 rounded-[10px] flex flex-col gap-4'>
          "I'm always a bit skeptical when ordering clothes online, but Chase Value exceeded my expectations! The shipping was fast, the packaging was nice, and the clothes were even better in person. Definitely recommend giving them a try."
        <div className='flex items-center text-[orange] text-[20px] gap-1'>
        <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
        </div>
        <p>-Shomaila Faheem</p>
        </div>
        </SwiperSlide>
        
    </Swiper>
  );
};