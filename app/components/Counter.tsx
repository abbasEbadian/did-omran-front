"use client";
import React, { useState, useEffect } from 'react';

function Counter() {
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 11,
    minutes: 10,
    seconds: 27,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prevTime => {
        const { days, hours, minutes, seconds } = prevTime;
        let newSeconds = seconds - 1;
        let newMinutes = minutes;
        let newHours = hours;
        let newDays = days;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }
        if (newHours < 0) {
          newHours = 23;
          newDays -= 1;
        }
        if (newDays < 0) {
          clearInterval(interval);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return { days: newDays, hours: newHours, minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-dark text-sm">مدت زمان باقی مانده:</span>
      <div className="flex items-center justify-center gap-4">
        <TimeBox value={timeLeft.days} label="روز" />
        <TimeBox value={timeLeft.hours} label="ساعت" />
        <TimeBox value={timeLeft.minutes} label="دقیقه" />
        <TimeBox value={timeLeft.seconds} label="ثانیه" />
      </div>
    </div>
  );
}

interface TimeBoxProps {
  value: number;
  label: string;
}

const TimeBox: React.FC<TimeBoxProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-[#F2F0F0] to-[#C0C0C0] rounded-2xl px-6 py-3">
      <span className="text-secondary text-2xl font-bold">
        {value < 10 ? `0${value}` : value}
      </span>
      <span className="text-secondary900 text-xs">{label}</span>
    </div>
  );
};

export default Counter;