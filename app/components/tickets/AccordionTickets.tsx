"use client";
import { useState } from 'react';
import CheckDown from '@/app/components/icons/check-down.svg'
import ChevronUp from '@/app/components/icons/chevron-up.svg'
import Image from 'next/image';
interface AccordionItem {
  title: string;
  content: string;
}

const AccordionTickets = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items: AccordionItem[] = [
    { title: 'لورم ایپسوم صنعت چاپ', content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده }'},
    { title: 'بخش ۲', content: 'محتوای بخش ۲' },
    { title: 'بخش ۳', content: 'محتوای بخش ۳' },
  ];

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto mt-10">
      {items.map((item, index) => (
        <div key={index} className="mb-2 border border-did/10 bg-did/5 p-3 rounded-2xl ">
          <button
            onClick={() => handleClick(index)}
            className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            <span className="text-dark font-semibold">{item.title}</span>
            <span>
            {activeIndex === index ? (
                <Image src={CheckDown} alt="بستن" width={24} height={24} />
            ) : (
                <Image src={ChevronUp} alt="باز کردن" width={24} height={24} />
            )}
            </span>
          </button>
          {activeIndex === index && (
            <div className="p-4 mt-2 text-secondary text-xs">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionTickets;