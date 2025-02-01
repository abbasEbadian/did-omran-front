import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ChevronLeft from '@/app/components/icons/chevron-left.svg';
import Trophy from '@/app/components/icons/trophy.svg';
import eventsImg from '@/public/img/events.png';

function Events() {
  return (
<>
  <div className="flex items-center gap-1 bg-white rounded-2xl w-full shadow-lg mt-2 pb-1">
    {/* ستون اول: تاریخ و دکمه رزرو */}
    <div className="flex flex-col gap-1 ps-4 pb-4">
      <div className="bg-blue700 text-white rounded-b-2xl flex flex-col items-center px-2 py-6">
        <span className="text-2xl font-bold">28</span>
        <span className="text-sm">فروردین</span>
      </div>
      <Link
        href="#"
        aria-label="رزرو رویداد"
        className="bg-secondary800 text-xs text-white px-2 rounded flex items-center justify-center py-1 hover:bg-secondary900 transition-all duration-300"
      >
        رزرو
        <Image src={ChevronLeft} alt="رزرو" width={20} height={20} />
      </Link>
    </div>

    {/* ستون دوم: توضیحات و تصویر رویداد */}
    <div className="px-2">
      <div className="flex flex-row gap-2 items-center">
        <span className="text-dark text-xs">
          لورم ایپسوم متن ساختگی با تولید سادگی
        </span>
        <Image src={Trophy} alt="جایزه" width={24} height={24} />
      </div>
      <div className="w-full h-24 relative mt-4">
        <Image
          src={eventsImg}
          alt="تصویر رویداد"
          fill
          className="object-cover rounded-lg w-full"
          priority
        />
      </div>
    </div>
  </div>  
</>
  );
}

export default Events;