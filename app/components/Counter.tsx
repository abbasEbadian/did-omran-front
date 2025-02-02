import React from 'react';

function Counter() {
  // داده‌های زمان باقی‌مانده
  const timeLeft = {
    days: 6,
    hours: 11,
    minutes: 10,
    seconds: 27,
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-dark text-sm">مدت زمان باقی مانده:</span>
      <div className="flex items-center justify-center gap-4">
        {/* روز */}
        <TimeBox value={timeLeft.days} label="روز" />
        {/* ساعت */}
        <TimeBox value={timeLeft.hours} label="ساعت" />
        {/* دقیقه */}
        <TimeBox value={timeLeft.minutes} label="دقیقه" />
        {/* ثانیه */}
        <TimeBox value={timeLeft.seconds} label="ثانیه" />
      </div>
    </div>
  );
}

// کامپوننت TimeBox برای نمایش هر بخش از زمان
interface TimeBoxProps {
  value: number;  
  label: string;
}

const TimeBox: React.FC<TimeBoxProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-[#F2F0F0] to-[#C0C0C0] rounded-2xl px-6 py-3">
      <span className="text-secondary text-2xl font-bold">
        {value < 10 ? `0${value}` : value} {/* افزودن صفر به اعداد کمتر از ۱۰ */}
      </span>
      <span className="text-secondary900 text-xs">{label}</span>
    </div>
  );
};

export default Counter;