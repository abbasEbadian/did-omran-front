"use client"
import { useState } from 'react';
import Image from 'next/image';
import Star1 from '@/app/components/icons/star-1.svg';
import StarFilled from '@/app/components/icons/HiStar.svg';

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
  );
}

export default TitleTrainingCourses;