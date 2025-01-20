import IoPlayOutline from '@/app/components/icons/IoPlayOutline.svg'
import BsFileEarmarkArrowDown from '@/app/components/icons/BsFileEarmarkArrowDown.svg'
import Clock from '@/app/components/icons/clock.svg'
import Download from '@/app/components/icons/download.svg'
import AccordionCourses from './AccordionCourses';
import Image from 'next/image';
import Link from 'next/link';

function ContentCourse() {
  return (
    <>
    <div className="bg-white px-8 py-6 rounded-2xl border border-did/15 shadow-custom-shadow flex flex-col gap-4">
        <div className="flex items-center justify-start gap-1">
            <span className="text-xl font-black text-dark">
            محتوا و سرفصل های   
            </span>
            <span className="text-xl font-black text-did">
            محتوا و سرفصل های  دوره جامع ایلاستریتور (مقدماتی ، پیشرفته و استادی)
            </span>
        </div>
        { /*اکوردیون باز/*/}
        <div className="bg-secondary600 rounded-2xl py-3 px-4 flex flex-col gap-2">
            
            <div className="flex items-center justify-between mb-1">
                <span className="text-dark text-base">جلسه اول - مقدمه</span>
                <div className="flex gap-1  items-center px-2 bg-blue/15">
                    <Image
                        src={Clock}
                        alt="left list icone"
                        height={24} 
                        width={24}
                        />
                    <span className="text-secondary text-xs"> 1 ساعت و 5 دقیقه</span>
                </div>
            </div>
         
            <div className="flex gap-1  items-center border-dashed border-b-2 border-secondary700 pb-3">
                <Image
                    src={IoPlayOutline}
                    alt="IoPlayOutline icone"
                    height={24} 
                    width={24}
                    />
                <span className="text-secondary text-sm">نصب و راه اندازی، آشنایی با محیط کار با واحدها، بررسی آرت بوردها و سیو کردن</span>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex gap-1  items-center">
                    <Image
                        src={BsFileEarmarkArrowDown}
                        alt="BsFileEarmarkArrowDown  icone"
                        height={24} 
                        width={24}
                        />
                    <span className="text-secondary text-sm">فایل آموزشی جلسه 01</span>
                </div>
                <div className="mt-2 ms-auto">
                        
                    <Link href="#" className="text-white bg-did rounded-2xl text-sm px-6 py-2 flex gap-1 items-center">
                    <Image
                        src={Download}
                        alt="User Check Img"
                        width={24}
                        height={24} />
                        لینک دانلود
                    </Link>
                </div>
            </div>

        </div>
        { /*اکوردیون بسته*/}
        <div className="bg-did/15 rounded-2xl py-3 px-4 flex flex-col gap-2 justify-between w-full">
            <div className="flex items-center justify-between mb-1">
                <span className="text-dark text-base">جلسه اول - مقدمه</span>
                <div className="flex gap-1  items-center px-2 bg-blue/15">
                    <Image
                        src={Clock}
                        alt="left list icone"
                        height={24} 
                        width={24}
                        />
                    <span className="text-secondary text-xs"> 1 ساعت و 5 دقیقه</span>
                </div>
            </div>
        </div>
        <div className="bg-did/15 rounded-2xl py-3 px-4 flex flex-col gap-2 justify-between w-full">
            <div className="flex items-center justify-between mb-1">
                <span className="text-dark text-base">جلسه اول - مقدمه</span>
                <div className="flex gap-1  items-center px-2 bg-blue/15">
                    <Image
                        src={Clock}
                        alt="left list icone"
                        height={24} 
                        width={24}
                        />
                    <span className="text-secondary text-xs"> 1 ساعت و 5 دقیقه</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
const Home = () => {
  const accordionItems = [
    {
      title: 'آکوردیون چیست؟',
      content: 'آکوردیون یک کامپوننت UI است که به کاربران امکان می‌دهد تا بخش‌های مختلف محتوا را باز یا بسته کنند.',
    },
    {
      title: 'چگونه در Next.js از Tailwind CSS استفاده کنیم؟',
      content: 'ابتدا Tailwind CSS را نصب و پیکربندی کنید، سپس از کلاس‌های utility آن برای استایل‌دهی استفاده کنید.',
    },
    {
      title: 'آیا می‌توان انیمیشن به آکوردیون اضافه کرد؟',
      content: 'بله، می‌توانید از کتابخانه‌هایی مانند Framer Motion یا CSS transitions برای افزودن انیمیشن استفاده کنید.',
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <AccordionCourses items={accordionItems} />
    </div>
  );
};

export default ContentCourse