"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { useRef, useState } from "react";
import { CourseType } from "@/api/types";
import useSWR from "swr";
import { getCourses } from "@/api";
import EducationItems from "./EducationItems";

interface Item {
    id: number;
    content: React.ReactNode;
}

const EducationSlider: React.FC = () => {
    const {
        data: courses,
        isLoading,
        error,
    } = useSWR<CourseType[]>("get-courses", () => getCourses());
    const swiperRef = useRef<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const goToSlide = (index: number) => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideTo(index);
            setActiveIndex(index);
        }
    };

    return (
        <div className="container mx-auto px-4">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={4}
                navigation
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
                        slidesPerView: 4,
                    },
                }}
            >
                {courses?.map((item) => (
                    <SwiperSlide key={item.id}>
                        <EducationItems {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>

         
        </div>
    );
};

export default EducationSlider;
