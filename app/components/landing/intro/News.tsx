"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import NewsImg1 from '@/public/img/news.png';
import NewsImg2 from '@/public/img/news2.jpeg';
import NewsImg3 from '@/public/img/news.jpeg';

function NewsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Go to the next slide
  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
  };

  // Go to the previous slide
  const goToPreviousSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? newsItems.length - 1 : prevIndex - 1
    );
  };

  // Go to a specific slide
  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative w-full mx-auto p-4 bg-secondary600/30 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Slide Content */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Image */}
        <div className="flex-shrink-0 relative -ms-8 md:-ms-12 w-1/2 md:w-1/3">
          <Image
            src={newsItems[activeIndex].image}
            alt={newsItems[activeIndex].alt}
            width={400}
            height={300}
            className="rounded-2xl object-cover w-full h-48 md:h-64 transform "
            priority={activeIndex === 0} // Prioritize loading the first image
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-4 w-full md:w-2/3">
          {/* News Tag */}
          <div className="bg-did rounded-xl px-4 py-2 inline-block me-auto min-w-24 text-center">
            <span className="text-base text-white">{newsItems[activeIndex].tag}</span>
          </div>

          {/* News Title and Description */}
          <div className="flex flex-col gap-2">
            <h2 className="text-dark text-xl font-bold">
              {newsItems[activeIndex].title}
            </h2>
            <p className="text-secondary text-xs leading-6 min-h-[80px]">
              {newsItems[activeIndex].description}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between ps-60">
        <button
          onClick={goToPreviousSlide}
          className="rounded-full p-2  text-secondary900 transition-colors duration-300"
          aria-label="Previous Slide"
        >
          &lt;
        </button>
        <button
          onClick={goToNextSlide}
          className="rounded-full p-2  text-secondary900 transition-colors duration-300"
          aria-label="Next Slide"
        >
          &gt;
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex gap-2 justify-center mt-4">
        {newsItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === activeIndex ? 'bg-did' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
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
    title: 'لورم ایپسوم متن ساختگیمفهوم از صنعت',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    image: NewsImg1,
    alt: 'News Image 1',
  },
  {
    id: 2,
    tag: 'تیتر دو',
    title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استرم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان رم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان .',
    image: NewsImg2,
    alt: 'News Image 2',
  },
  {
    id: 3,
    tag: 'تیتر سه',
    title: 'لورم ی نامفهوم از صنعت',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    image: NewsImg3,
    alt: 'News Image 3',
  },
];