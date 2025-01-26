'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import IoPlayOutline from '@/app/components/icons/IoPlayOutline.svg';
import BsFileEarmarkArrowDown from '@/app/components/icons/BsFileEarmarkArrowDown.svg';
import Clock from '@/app/components/icons/clock.svg';
import Download from '@/app/components/icons/download.svg';

// نوع‌های TypeScript برای هر بخش اکوردیون
interface Session {
  title: string;
  duration: string;
  description?: string;
  file?: string;
}

function ContentCourse() {
  // State برای مدیریت باز و بسته شدن هر بخش اکوردیون
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // داده‌های نمونه برای بخش‌های اکوردیون
  const sessions: Session[] = [
    {
      title: 'جلسه اول - مقدمه',
      duration: '1 ساعت و 5 دقیقه',
      description: 'نصب و راه اندازی، آشنایی با محیط کار با واحدها، بررسی آرت بوردها و سیو کردن',
      file: 'فایل آموزشی جلسه 01',
    },
    {
      title: 'جلسه دوم - مبانی طراحی',
      duration: '1 ساعت و 20 دقیقه',
    },
    {
      title: 'جلسه سوم - ابزارهای پیشرفته',
      duration: '1 ساعت و 30 دقیقه',
    },
  ];

  // تابع برای تغییر وضعیت باز و بسته شدن هر بخش
  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-white px-8 py-6 rounded-2xl border border-did/15 shadow-custom-shadow flex flex-col gap-4">
      {/* عنوان دوره */}
      <div className="flex items-center justify-start gap-1">
        <span className="text-xl font-black text-dark">محتوا و سرفصل های</span>
        <span className="text-xl font-black text-did">
          دوره جامع ایلاستریتور (مقدماتی ، پیشرفته و استادی)
        </span>
      </div>

      {/* بخش‌های اکوردیون */}
      {sessions.map((session, index) => (
        <div
          key={index}
          className={`${
            openIndex === index ? 'bg-secondary600' : 'bg-did/15'
          } rounded-2xl py-3 px-4 flex flex-col gap-2 transition-all duration-300`}
        >
          {/* هدر هر بخش */}
          <div
            className="flex items-center justify-between mb-1 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-dark text-base">{session.title}</span>
            <div className="flex gap-1 items-center px-2 bg-blue/15">
              <Image src={Clock} alt="Clock icon" height={24} width={24} />
              <span className="text-secondary text-xs">{session.duration}</span>
            </div>
          </div>

          {/* محتوای هر بخش (فقط اگر باز باشد) */}
          {openIndex === index && (
            <>
              <div className="flex gap-1 items-center border-dashed border-b-2 border-secondary700 pb-3">
                <Image src={IoPlayOutline} alt="Play icon" height={24} width={24} />
                <span className="text-secondary text-sm">{session.description}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-1 items-center">
                  <Image
                    src={BsFileEarmarkArrowDown}
                    alt="File download icon"
                    height={24}
                    width={24}
                  />
                  <span className="text-secondary text-sm">{session.file}</span>
                </div>
                <div className="mt-2 ms-auto">
                  <Link
                    href="#"
                    className="text-white bg-did rounded-2xl text-sm px-6 py-2 flex gap-1 items-center"
                  >
                    <Image src={Download} alt="Download icon" width={24} height={24} />
                    لینک دانلود
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default ContentCourse;