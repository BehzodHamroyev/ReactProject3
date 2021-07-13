import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "../../../node_modules/swiper/react";

// Import Swiper styles
import "../../../node_modules/swiper/swiper.min.css";
import "../../../node_modules/swiper/components/pagination/pagination.min.css"
import "./swiper.css";


// import Swiper core and required modules
import SwiperCore, {Pagination} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);


 function Swipers() {
    return (
        <>
        <Swiper slidesPerView={1} spaceBetween={10} pagination={{
      "clickable": true
    }} breakpoints={{
      "640": {
        "slidesPerView": 2,
        "spaceBetween": 0
      },
      "768": {
        "slidesPerView": 4,
        "spaceBetween": 0
      },
      "1024": {
        "slidesPerView": 5,
        "spaceBetween": 0
      }
    }} className="mySwiper">
      <SwiperSlide>Slide 1</SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        </>
      )


 }

      export default Swipers;









