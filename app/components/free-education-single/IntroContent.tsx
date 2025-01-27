import Image from 'next/image';
import Calendar from '@/app/components/icons/calendar.svg';
import Eye from '@/app/components/icons/eye.svg';
import Star from '@/app/components/icons/star-1.svg';
import Filters from '@/app/components/icons/filters-2.svg';


const items = [
  {
    id: 1,
    category: 'نظارت ، آموزش فتوشاپ',
    date: '1403/2/20',
    rating: 3.9,
    views: 1728,
  },

];

function IntroContent() {
  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex lg:flex-row flex-col lg:items-center items-start
           justify-between lg:gap-4 gap-2 bg-did/15 py-2 px-6 rounded-2xl w-full"
        >
          <div className="flex items-center gap-1">
            <Image src={Filters} alt="filter icon" height={24} />
            <span className="text-blue text-xs">{item.category}</span>
          </div>
          <div className="flex items-center gap-1">
            <Image src={Calendar} alt="calendar icon" height={24} />
            <span className="text-blue text-xs">{item.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Image src={Star} alt="star icon" height={24} />
            <span className="text-blue text-xs">امتیاز: {item.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Image src={Eye} alt="eye icon" height={15} />
            <span className="text-blue text-xs">تعداد مشاهده: {item.views}</span>
          </div>
        </div>
      ))}
    </>
  );
}

export default IntroContent;