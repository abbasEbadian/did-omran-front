"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import NewsImg1 from '@/public/img/news.jpeg';
import NewsImg2 from '@/public/img/news.jpeg';
import NewsImg3 from '@/public/img/news.jpeg';

function NewsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  // تغییر خودکار هر 5 ثانیه
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 5000); // هر 5 ثانیه

    return () => clearInterval(interval); // پاک کردن interval هنگام unmount
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* News Image */}
      <Link href="#1" className="rounded-2xl overflow-hidden flex-shrink-0">
        <Image
          src={newsItems[activeIndex].image}
          alt={newsItems[activeIndex].alt}
          width={310}
          height={210}
          className="rounded-2xl hover:scale-105 transition-transform duration-300"
        />
      </Link>

      {/* News Content */}
      <div className="flex flex-col items-start gap-4 bg-secondary700/10 p-6 rounded-2xl flex-grow">
        {/* News Tag */}
        <div className="bg-did rounded-xl px-4 py-2">
          <span className="text-base text-white">{newsItems[activeIndex].tag}</span>
        </div>

        {/* News Title and Description */}
        <div className="flex flex-col items-start gap-4">
          <span className="text-dark text-xl font-bold">
            {newsItems[activeIndex].title}
          </span>
          <p className="text-secondary text-sm leading-6">
            {newsItems[activeIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsSlider;

// News Items Data
const newsItems = [
  {
    id: 1,
    tag: 'تیتر یک',
    title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
    image: NewsImg1,
    alt: 'News Image 1',
  },
  {
    id: 2,
    tag: 'تیتر دو',
    title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
    image: NewsImg2,
    alt: 'News Image 2',
  },
  {
    id: 3,
    tag: 'تیتر سه',
    title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
    image: NewsImg3,
    alt: 'News Image 3',
  },
];