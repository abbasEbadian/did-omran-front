"use client"
import { useState } from 'react';
import Image from 'next/image';
import MdAlarm from '@/app/components/icons/MdAlarm.svg';
import ListLeft from '@/app/components/icons/list-left.svg';
import UserMore from '@/app/components/icons/users-more.svg';
import CalendarCheck from '@/app/components/icons/calendar-check.png';
import Star1 from '@/app/components/icons/star-1.svg';
import StarFilled from '@/app/components/icons/HiStar.svg';
import Banner1 from '@/public/img/banner1.png';

function TitleTrainingCourses() {
  // State برای مدیریت امتیاز
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  // تابع برای ثبت امتیاز
  const handleRating = (newRating: number) => {
    setRating(newRating);
    // در اینجا می‌توانید امتیاز را به سرور ارسال کنید یا در state کلی برنامه ذخیره کنید.
    console.log(`امتیاز ثبت شده: ${newRating}`);
  };

  // داده‌های نمونه برای جزئیات دوره
  const courseDetails = [
    { icon: ListLeft, text: 'بیش از +35 جلسه' },
    { icon: MdAlarm, text: 'بیش از 44 ساعت' },
    { icon: UserMore, text: '1903 دانشجو' },
    { icon: CalendarCheck, text: 'آخرین آپدیت: نوروز1403' },
  ];

  return (
    <div className="flex flex-col items-start gap-4">
      {/* بخش عنوان و توضیحات دوره */}
      <div className="flex flex-col items-start gap-2">
        <span className="text-dark text-xl font-extrabold">
          دوره جامع افتر افکت (مقدماتی ، پیشرفته و استادی)
        </span>
        <span className="text-secondary text-sm">
          دوره جامع افتر افکت (مقدماتی ، پیشرفته و استادی)
        </span>
      </div>

      {/* بخش جزئیات دوره */}
      <div className="flex flex-wrap items-center justify-between w-full gap-4">
        {courseDetails.map((detail, index) => (
          <div key={index} className="flex items-center gap-1">
            <Image
              src={detail.icon}
              alt={`${detail.text} icon`}
              height={24}
              width={24}
              className="object-contain"
            />
            <span className="text-secondary text-xs">{detail.text}</span>
          </div>
        ))}

        {/* بخش امتیازدهی */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return (
              <button
                key={index}
                onClick={() => handleRating(starValue)}
                onMouseEnter={() => setHoverRating(starValue)}
                onMouseLeave={() => setHoverRating(0)}
                className="focus:outline-none"
              >
                <Image
                  src={starValue <= (hoverRating || rating) ? StarFilled : Star1}
                  alt={`Star ${starValue}`}
                  height={24}
                  width={24}
                  className="cursor-pointer"
                />
              </button>
            );
          })}
          <span className="text-secondary text-xs">( {rating} امتیاز)</span>
        </div>
      </div>

      <div className="w-full rounded-2xl overflow-hidden">
        <Image
          src={Banner1}
          alt="Course banner"
          height={667}
          width={775}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}

export default TitleTrainingCourses;