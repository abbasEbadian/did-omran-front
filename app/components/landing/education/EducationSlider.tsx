"use client"; // برای استفاده از ویژگی‌های کلاینت‌ساید در Next.js
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import EducationItems from '@/app/components/landing/education/EducationItems';
import { useRef, useState } from 'react'; // برای استفاده از useRef و useState

// نوع داده‌های آیتم‌ها
interface Item {
  id: number;
  content: React.ReactNode;
}

const EducationSlider: React.FC = () => {
  // داده‌های نمونه
  const items: Item[] = [
  ];

  // استفاده از useRef برای دسترسی به Swiper instance
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0); // برای ردیابی اسلاید فعال

  // تابع برای رفتن به اسلاید خاص
  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index); // رفتن به اسلاید مورد نظر
      setActiveIndex(index); // به‌روزرسانی اسلاید فعال
    }
  };

  return (
    <div className="container mx-auto px-4">
      <Swiper
        modules={[Navigation, Pagination]} // فعال‌سازی Navigation و Pagination
        spaceBetween={20} // فاصله بین آیتم‌ها
        slidesPerView={3} // تعداد آیتم‌ها در هر اسلاید
        navigation // فعال‌سازی دکمه‌های ناوبری (چپ و راست)
        loop={true} // اسلایدر لوپ شود
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // به‌روزرسانی اسلاید فعال
        onSwiper={(swiper) => (swiperRef.current = swiper)} // ذخیره Swiper instance
        breakpoints={{
          // تنظیمات برای صفحات کوچک (موبایل)
          320: {
            slidesPerView: 1,
          },
          // تنظیمات برای صفحات متوسط (تبلت)
          640: {
            slidesPerView: 2,
          },
          // تنظیمات برای صفحات بزرگ (دسکتاپ)
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div>{item.content}</div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slide Indicators (نشانگرهای اسلاید) */}
      <div className="flex gap-2 justify-center">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === activeIndex ? 'bg-did' : 'border border-secondary900'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default EducationSlider;