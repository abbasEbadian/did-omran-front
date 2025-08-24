"use client";
import { useState } from 'react';
import Image from 'next/image'
function ScoreStarFreeFilm() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRating = (newRating: number) => {
    setRating(newRating);
  };
  return (
    <>
    <div className="flex  items-center gap-4 justify-end">
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
                  src={starValue <= (hoverRating || rating) ? "/icons/FaStar.svg" : "/icons/garystar.svg"}
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