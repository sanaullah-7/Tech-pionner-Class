import React from "react";
import { Swiper, SwiperSlide, } from "swiper/react";
import { Pagination, Navigation,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img from "../../assets/image.png"


export default function SimpleSlider() {
  return (
      <Swiper
      modules={[Pagination, Navigation, Autoplay]} // Autoplay ko modules list mein register karna zaroori hai
      pagination={{ clickable: true }}
      navigation={true}
      loop={true} // last slide ke baad wapis first pe chala jata hai (infinite feel)
      slidesPerView={2}
      spaceBetween={0}
      // Step 2: Autoplay config — yehi automatic horizontal move karwata hai
      autoplay={{
        delay: 3000, // har 3000ms (3 sec) baad next slide pe khud chala jayega
        disableOnInteraction: false, // user agar manually swipe kare to bhi autoplay band nahi hoga
        pauseOnMouseEnter: true, // mouse hover karte hi ruk jayega — user ko dekhne ka time milta hai
      }}
    >
      <SwiperSlide><img src={img} alt="" /><h3>1</h3></SwiperSlide>
      <SwiperSlide><h3 className="bg-red-400">2</h3></SwiperSlide>
      <SwiperSlide><h3 className="bg-red-400">3</h3></SwiperSlide>
      <SwiperSlide><h3 className="bg-red-400">4</h3></SwiperSlide>
      <SwiperSlide><h3 className="bg-red-400">5</h3></SwiperSlide>
      <SwiperSlide><h3 className="bg-red-400">6</h3></SwiperSlide>
    </Swiper>
  );
}