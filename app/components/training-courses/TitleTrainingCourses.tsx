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
import { CourseType } from '@/api/types';

function TitleTrainingCourses(course: CourseType) {
  const [rating, setRating] = useState(4);
  const [hoverRating, setHoverRating] = useState(0);

  const duration = Math.ceil(course.topics.map(q => q.duration).reduce((a, b) => a + b, 0) / 60)
  const courseDetails = [
    { icon: ListLeft, text: `${course?.topics?.length}  جلسه`},
    { icon: MdAlarm, text: `بیش از ${duration} ساعت` },
    { icon: UserMore, text: '190 دانشجو' },
    { icon: CalendarCheck, text: 'آخرین آپدیت:  بهمن1403' },
  ];

  return (
    <div className="flex flex-col items-start gap-4">
      {/* بخش عنوان و توضیحات دوره */}
      <div className="flex flex-col items-start gap-2">
        <span className="text-dark text-xl font-extrabold">
          {course.name}
        </span>
        <span className="text-secondary text-sm">
          {course.title}
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
          src={course.banner}
          alt="Course banner"
          height={1500}
          width={1000}
          className=" object-contain max-h-[500px]"
        />
      </div>
    </div>
  );
}

export default TitleTrainingCourses;