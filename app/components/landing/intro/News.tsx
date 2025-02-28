"use client";

import Image from "next/image";
import { act, useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { getBlogs } from "@/api";
import { BlogType } from "@/api/blog/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

function NewsSlider() {
    const { data: blogs, isLoading, error } = useSWR<BlogType[]>(
        "get-blogs",
        getBlogs
    );
    const swiperRef = useRef<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="relative w-full mx-auto p-4 bg-secondary600/30 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[256px]">
            {blogs && !isLoading && (
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay
                    pagination={{ clickable: true, el: "#pagination" }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                    {blogs?.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="flex-shrink-0 relative  w-1/2 md:w-1/3">
                                    {blogs?.[activeIndex]?.image && (
                                        <Image
                                            src={
                                                blogs?.[activeIndex]?.image ||
                                                ""
                                            }
                                            alt={
                                                blogs?.[activeIndex]?.title ||
                                                ""
                                            }
                                            width={400}
                                            height={300}
                                            className="rounded-2xl object-cover w-full h-48 md:h-64 transform "
                                            priority={activeIndex === 0}
                                        />
                                    )}
                                </div>

                                <div className="flex flex-col gap-4 w-full md:w-2/3">
                                    <div className="bg-blue700 rounded-xl px-4 py-2 inline-block me-auto min-w-24 text-center">
                                        <span className="text-base text-white">
                                            {blogs?.[activeIndex]?.headline}
                                        </span>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <h2 className="text-dark text-xl font-bold">
                                            {blogs?.[activeIndex]?.title}
                                        </h2>
                                        <p className="text-secondary text-xs leading-6 min-h-[80px]">
                                            {blogs?.[activeIndex]?.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
            <div className="flex items-center justify-center">
                <div
                    id="pagination"
                    className="mx-auto flex items-center justify-center gap-2"
                ></div>
            </div>
        </div>
    );
}

export default NewsSlider;
