import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from "../../assets/image1.png"
import img2 from "../../assets/image2.png"
import img3 from "../../assets/image3.png"
import img4 from "../../assets/image4.png"

export default function sliderpage() {
  return (
    <Swiper
      modules={[Pagination, Navigation,Autoplay]} // Autoplay ko modules list mein register karna zaroori hai
      pagination={{ clickable: true }}
      navigation={true}
      loop={true} // last slide ke baad wapis first pe chala jata hai (infinite feel)
      slidesPerView={2}
      spaceBetween={"40px"}

      autoplay={{
        delay: 1000, // har 3000ms (3 sec) baad next slide pe khud chala jayega
        disableOnInteraction: false, // user agar manually swipe kare to bhi autoplay band nahi hoga
        pauseOnMouseEnter: true, // mouse hover karte hi ruk jayega — user ko dekhne ka time milta hai
      }}
    >


    <div className='h-[200px] w-[200px] items-center place-items-center bg-amber-300 flex  justify-center '>
    
    <SwiperSlide className='h-[200px] w-[200px] items-center place-items-center bg-black flex  justify-center'><img className='bg-amber-200 w-50 h-50 p-5 rounded-2xl' src={img1} alt="" /></SwiperSlide>
    <SwiperSlide className='h-[200px] w-[200px] items-center place-items-center bg-green-500 flex  justify-center'><img className='bg-amber-200 w-50 h-50 p-5 rounded-2xl' src={img2} alt="" /></SwiperSlide>
    <SwiperSlide className='h-[200px] w-[200px] items-center place-items-center bg-black flex  justify-center'><img className='bg-amber-200 w-50 h-50 p-5 rounded-2xl' src={img3} alt="" /></SwiperSlide>
    <SwiperSlide className='h-[200px] w-[200px] items-center place-items-center bg-black flex  justify-center'><img className='bg-amber-200 w-50 h-50 p-5 rounded-2xl' src={img4} alt="" /></SwiperSlide>
    </div>

    </Swiper>
  )
}
