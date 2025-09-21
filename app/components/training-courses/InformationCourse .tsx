'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import TrainingCoursesInfo from './TrainingCoursesInfo';
import { CourseType } from '@/api/types';

// لیست اساتید و تصاویر مربوطه


function InformationCourse(course: CourseType) {
  const [activeIndex, setActiveIndex] = useState(0);
  const instructors = course.tutors.map(q => ({
    name: q.name,
    image: q.user.avatar
  }))
  useEffect(() => {
    // تنظیم تایمر برای تغییر استاد هر ۵ ثانیه
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % course.tutors.length);
    }, 5000);

    // پاک کردن تایمر هنگام از بین رفتن کامپوننت
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col relative bg-did/10 rounded-2xl px-6 pb-5 gap-4 pt-28 mt-32 mx-4 lg:mx-0">
      {/* بخش اساتید */}
      <div className="flex flex-col items-center gap-4 bg-gradient-to-b from-[#8EBFFF] rounded-2xl mx-8 px-4 py-5 absolute -top-12 left-0 right-0">
        <div className="flex items-center justify-center">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className={`rounded-full -mx-2 transition-all duration-300 ${
                index === activeIndex ? 'border-2 border-did' : 'border-2 border-transparent'
              }`}
            >
              <Image
                src={instructor.image}
                alt={`${instructor.name} profile`}
                height={80}
                width={80}
                className="rounded-full"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 justify-center">
          <span className="text-base text-dark">توسط</span>
          <span className="text-base text-blue font-semibold">
            {instructors[activeIndex]?.name}
          </span>
        </div>
      </div>

      {/* بخش قیمت دوره */}
      <div className="flex items-center justify-center gap-2 my-4">
        <span className="text-secondary900 text-sm">مبلغ دوره:</span>
        <span className="text-dark text-xl font-black">{Number(course.final_price).toLocaleString('fa')} تومان</span>
      </div>

      {/* دکمه ثبت نام */}
      <Link
        href="#"
        className="text-white bg-did rounded-2xl text-sm px-6 py-3 flex gap-1 items-center w-full justify-center"
        aria-label="ثبت نام در دوره"
      >
        ثبت نام
      </Link>

      {/* بخش اطلاعات دوره */}
      <TrainingCoursesInfo {...course}/>
    </div>
  );
}

export default InformationCourse;