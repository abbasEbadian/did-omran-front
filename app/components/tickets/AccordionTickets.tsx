"use client";
import { useState } from 'react';
import Image from 'next/image';
interface AccordionItem {
  title: string;
  content: string;
}

const AccordionTickets = ({items}: {items: AccordionItem[]}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);


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
            <span className="text-dark font-semibold content-center">{item.title}</span>
            <span>
            {activeIndex === index ? (
                <Image src={"/icons/check-down.svg"} alt="بستن" width={24} height={24} />
            ) : (
                <Image src={"/icons/chevron-up.svg"} alt="باز کردن" width={24} height={24} />
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