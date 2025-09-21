"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { CourseType } from "@/api/types";

import EducationItems from "./EducationItems";

const EducationSlider= ({items}: {items: CourseType[]}) => {

    const swiperRef = useRef<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);


    return (
        <div className="container mx-auto px-4">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={4}
                loop={true}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="py-8"
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },

                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1440:{
                        slidesPerView: 4,
                    }
                }}
            >
                {items?.map((item) => (
                    <SwiperSlide key={item.id}>
                        <EducationItems {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>


        </div>
    );
};

export default EducationSlider;
