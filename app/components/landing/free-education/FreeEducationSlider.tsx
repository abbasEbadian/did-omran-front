"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import FreeEducationItems from "@/app/components/landing/free-education/FreeEducationItems";
import { EducationType } from "@/api/education/types";


export default function FreeEducationSlider({items}: { items: EducationType[] }) {

    return (
        <div className="container mx-auto px-6">
            <Swiper
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={4}

                pagination={{
                    clickable: true,
                    el: ".custom-pagination",
                    bulletClass: "custom-bullet",
                    bulletActiveClass: "custom-bullet-active",
                }}
                loop
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
                        <FreeEducationItems {...item}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="custom-pagination flex justify-center gap-1 mt-10"></div>
        </div>

    );
}

