"use client";
import Image from 'next/image';
import Slash from '@/app/components/icons/slash.svg';
import { useEffect, useState } from 'react';

function UserComments() {
  const [activeIndex, setActiveIndex] = useState(0);

  // تغییر خودکار هر 5 ثانیه
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % userComments.length);
    }, 5000); // هر 5 ثانیه

    return () => clearInterval(interval); // پاک کردن interval هنگام unmount
  }, []);

  return (
    <div className="flex flex-col lg:gap-8 gap-6 mx-6">
      {/* Title and Description */}
      <div className="flex flex-col lg:items-start gap-3">
        <span className="text-2xl text-dark font-bold text-center lg:text-start">
          نظرات دانشجویان
        </span>
        <p className="text-secondary text-sm text-center">
          با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
        </p>
      </div>

      {/* User Comment */}
      <div className="flex flex-col items-start  gap-3">
        <div className=''> 
          <Image
            src={Slash}
            alt="User Check Img"
            width={45}
            height={38}
          />
        </div>
        <p className="text-secondary900 text-justify text-sm h-14">
          {userComments[activeIndex].comment}
        </p>
        <span className="text-secondary800 text-xl">
          {userComments[activeIndex].name}
        </span>
      </div>

      {/* User Profiles */}
      <div className="flex items-center justify-center gap-6">
        {userComments.map((profile, index) => (
          <div
            key={profile.id}
            className={`rounded-full border-2 p-1 transition-all duration-300 ${
              index === activeIndex ? 'border-did scale-110' : 'border-gray-300'
            }`}
            onClick={() => setActiveIndex(index)} // تغییر دستی با کلیک
          >
            <Image
              src={profile.src}
              alt={profile.alt}
              width={66}
              height={66}
              className="rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserComments;

// User Comments Data
const userComments = [
  {
    id: 1,
    alt: 'profile img',
    src: "/img/user1.png",
    comment: 'پشتیبانی همکارانتون بی‌نظیر بود، من هفته آخر آخر کارشناس رسمی خیلی استرس داشتم ولی تیم شما با دلسوزی و همدلی بالا ما رو حمایت کردند تا تونستیم بالاخره قبول بشیم؛ سلام ما رو به دکتر خلوتی عزیز برسونید👌😍',
    name: '_ Aria Zinanrio',
  },
  {
    id: 2,
    alt: 'profile img',
    src: "/img/user2.png",
    comment: 'خیلی راضی بودم از خدماتتون، مخصوصاً آزمون‌های آزمایشی که خیلی بهم کمک کرد.',
    name: '_ Sara Mohammadi',
  },
  {
    id: 3,
    alt: 'profile img',
    src: "/img/user3.png",
    comment: 'تیم پشتیبانی خیلی حرفه‌ای و دلسوز بودن، ممنون از زحماتتون.',
    name: '_ Ali Rezaei',
  },
  {
    id: 4,
    alt: 'profile img',
    src: "/img/user4.png",
    comment: 'آزمون‌های شما واقعاً استاندارد و مفید بودن، به همه توصیه می‌کنم.',
    name: '_ Maryam Hosseini',
  },
  {
    id: 5,
    alt: 'profile img',
    src: "/img/user5.png",
    comment: 'من با کمک آزمون‌های شما تونستم در آزمون نظام مهندسی قبول شم، ممنونم.',
    name: '_ Reza Karimi',
  },
];