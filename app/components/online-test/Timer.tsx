"use client";
import Image from "next/image";
import MdOutlineTimer from "@/app/components/icons/MdOutlineTimer.svg";
import React, { useState, useEffect } from "react";

const convertMinutesToTime = (totalMinutes: number) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const seconds = 0; // Since we are converting from minutes, seconds will be 0
  return { hours, minutes, seconds };
};

const Timer = ({iniTime, ...rest}: {iniTime: number}) => {
    const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });


    useEffect(() => {
        setTime(convertMinutesToTime(iniTime));

        const timer = setInterval(() => {
            setTime((prevTime) => {
                let { hours, minutes, seconds } = prevTime;

                if (seconds === 0) {
                    if (minutes === 0) {
                        if (hours === 0) {
                            clearInterval(timer);
                            return { hours: 0, minutes: 0, seconds: 0 };
                        }
                        hours--;
                        minutes = 59;
                    } else {
                        minutes--;
                    }
                    seconds = 59;
                } else {
                    seconds--;
                }

                return { hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [iniTime]);

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
            <div className="flex justify-center items-center gap-2 bg-blue/10 px-6 py-2 rounded-2xl">
                <div className="text-center">
                    <span className="text-4xl font-bold text-blue">
                        {time.seconds.toString().padStart(2, "0")}{" "}
                    </span>
                </div>
                <span className="text-4xl font-bold text-blue">:</span>
                <div className="text-center">
                    <span className="text-4xl font-bold text-blue">
                        {time.minutes.toString().padStart(2, "0")}
                    </span>
                </div>
                <span className="text-4xl font-bold text-blue">:</span>
                <div className="text-center">
                    <span className="text-4xl font-bold text-blue">
                        {time.hours.toString().padStart(2, "0")}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Timer;
