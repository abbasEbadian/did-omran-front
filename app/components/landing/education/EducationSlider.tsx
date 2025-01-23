"use client"; // برای استفاده از ویژگی‌های کلاینت‌ساید در Next.js
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import EducationItems from '@/app/components/landing/education/EducationItems'
// نوع داده‌های آیتم‌ها
interface Item {
  id: number;
  content: React.ReactNode;
}

const EducationSlider: React.FC = () => {
  // داده‌های نمونه
  const items: Item[] = [
    { id: 1 , content:<EducationItems/> },
    { id: 2 , content:<EducationItems/> },
    { id: 3 , content:<EducationItems/> },
    { id: 4 , content:<EducationItems/> },
    { id: 5 , content:<EducationItems/> },
  ];

  return (
    <div className="container mx-auto">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20} // فاصله بین آیتم‌ها
        slidesPerView={3} // تعداد آیتم‌ها در هر اسلاید
       // navigation  دکمه‌های ناوبری (چپ و راست)
        pagination={{
          clickable: true,
          el: '.custom-pagination', // کلاس سفارشی برای pagination
          bulletClass: 'custom-bullet', // کلاس سفارشی برای نقاط pagination
          bulletActiveClass: 'custom-bullet-active', // کلاس سفارشی برای نقطه فعال
        }}
        loop={true} // اسلایدر لوپ شود
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
            <div>
              {item.content}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        {/* Pagination سفارشی */}
        <div className="custom-pagination items-center flex justify-center gap-1"></div>
    </div>
    
  );
};

export default EducationSlider;