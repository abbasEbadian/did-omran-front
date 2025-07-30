"use client";

import React, {useState, useEffect, useCallback} from "react";

function Counter({date}: { date: number }) {

    const calculateTimeLeft = useCallback(() => {
            const remainingMilliseconds = date - new Date().getTime();
            if (remainingMilliseconds <= 0) {
                return {days: 0, hours: 0, minutes: 0, seconds: 0};
            }

            const days = Math.floor(remainingMilliseconds / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (remainingMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (remainingMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor(
                (remainingMilliseconds % (1000 * 60)) / 1000
            );

            return {days, hours, minutes, seconds};
        }, [date])
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [calculateTimeLeft]);


    return (
        <div className="flex flex-col items-center gap-3">
            <span className="text-dark text-sm">مدت زمان باقی مانده:</span>
            <div className="flex items-center justify-center gap-4">
                <TimeBox value={timeLeft.days} label="روز"/>
                <TimeBox value={timeLeft.hours} label="ساعت"/>
                <TimeBox value={timeLeft.minutes} label="دقیقه"/>
                <TimeBox value={timeLeft.seconds} label="ثانیه"/>
            </div>
        </div>
    );
}

interface TimeBoxProps {
    value: number;
    label: string;
}

const TimeBox: React.FC<TimeBoxProps> = ({value, label}) => {
    return (
        <div
            className="flex flex-col items-center justify-center bg-gradient-to-b from-[#F2F0F0] to-[#C0C0C0] rounded-2xl px-6 py-3 size-18 ">
            <span className="text-secondary text-2xl font-bold">
                {value < 10 ? `0${value}` : value}
            </span>
            <span className="text-secondary900 text-xs">{label}</span>
        </div>
    );
};

export default Counter;
