"use client";
import Image from 'next/image';
import MdOutlineTimer from '@/app/components/icons/MdOutlineTimer.svg'
import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  // زمان اولیه (مثلاً 1 ساعت و 30 دقیقه و 45 ثانیه)
  const initialTime = { hours: 1, minutes: 30, seconds: 45 };

  useEffect(() => {
    // زمان اولیه را تنظیم کنید
    setTime(initialTime);

    const timer = setInterval(() => {
      setTime((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        // اگر ثانیه‌ها به صفر رسیدند
        if (seconds === 0) {
          if (minutes === 0) {
            if (hours === 0) {
              // تایمر به پایان رسیده است
              clearInterval(timer);
              return { hours: 0, minutes: 0, seconds: 0 };
            }
            // ساعت را کاهش داده و دقیقه‌ها را به 59 تنظیم کنید
            hours--;
            minutes = 59;
          } else {
            // دقیقه را کاهش داده و ثانیه‌ها را به 59 تنظیم کنید
            minutes--;
          }
          seconds = 59;
        } else {
          // ثانیه‌ها را کاهش دهید
          seconds--;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    // تمیز کردن تایمر هنگام unmount کامپوننت
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-2">
       <div className="flex items-center gap-1">
            <Image
                src={MdOutlineTimer}
                alt="MdOutlineTimer"
                height={24} 
                width={24}
            />
            <span className="text-secondary text-sm">زمان باقی مانده:</span>
       </div>
        <div className="flex justify-center items-center gap-2 bg-blue/10 p-6 rounded-2xl">
            <div className="text-center">
                <span className="text-4xl font-bold text-blue">
                {time.seconds.toString().padStart(2, '0')} </span>
        </div>
        <span className="text-4xl font-bold text-blue">:</span>
        <div className="text-center">
            <span className="text-4xl font-bold text-blue">
            {time.minutes.toString().padStart(2, '0')}
            </span>
        </div>
        <span className="text-4xl font-bold text-blue">:</span>
        <div className="text-center">
            <span className="text-4xl font-bold text-blue">
            {time.hours.toString().padStart(2, '0')}
            </span>
        </div>
        
        </div>
    </div>
  );
};

export default Timer;