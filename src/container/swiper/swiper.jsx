import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from './Rectangle.svg';
import img2 from './Rectangle (1).svg';
import img3 from './Rectangle (2).svg';
import img4 from './Rectangle (3).svg';
import img5 from './Rectangle (4).svg';
import img6 from './Rectangle (5).svg';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "./swiper.css";
import SwiperCore, {
    Autoplay,Pagination,Navigation
  } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);

export default function App() {


    return (<div className="container">
        <Swiper slidesPerView={1}  autoplay={{
  "delay": 2500,
  "disableOnInteraction": false
}}
            spaceBetween={10}
            pagination={
                { "clickable": true }
            }
            breakpoints={
                {
                    "640": {
                        "slidesPerView": 2,
                        "spaceBetween": 20
                    },

                    "768"
                        : {
                        "slidesPerView"
                            :
                            4,
                        "spaceBetween"
                            :
                            40
                    },
                    "1024"
                        : {
                        "slidesPerView"
                            : 5,
                        "spaceBetween"
                            : 50
                    }
                }} className="mySwiper">
            <SwiperSlide> <img src={img3} alt="" />
            </SwiperSlide> <SwiperSlide> <img src={img6} alt="" />
            </SwiperSlide> <SwiperSlide> <img src={img1} alt="" />
            </SwiperSlide> <SwiperSlide> <img src={img2} alt="" />
            </SwiperSlide> <SwiperSlide> <img src={img3} alt="" />
            </SwiperSlide> <SwiperSlide> <img src={img4} alt="" />
            </SwiperSlide> <SwiperSlide> <img src={img5} alt="" />
            </SwiperSlide> <SwiperSlide> <img src={img1} alt="" />
            </SwiperSlide> <SwiperSlide> <img src={img3} alt="" />
            </SwiperSlide> </Swiper> </div>)
}
