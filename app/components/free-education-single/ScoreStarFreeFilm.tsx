"use client";
import StarFilled from '@/app/components/icons/FaStar.svg';
import { useState } from 'react';
import Image from 'next/image'
import FaStar from '@/app/components/icons/garystar.svg'
function ScoreStarFreeFilm() {
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
    <>
    <div className="flex  items-center gap-4 justify-between">
        <span className="text-dark ">
            امتیاز ثبت شده
        ( {rating} امتیاز)
        </span>

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
                  src={starValue <= (hoverRating || rating) ? StarFilled : FaStar}
                  alt={`Star ${starValue}`}
                  height={24}
                  width={24}
                  className="cursor-pointer"
                />
              </button>
            );
          })}
          
        </div>
    </div>
    </>
  )
}

export default ScoreStarFreeFilm