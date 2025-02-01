import Image from 'next/image';
import Link from 'next/link';
import bibliophile from '@/app/components/icons/bibliophile-animate.svg';
import ElectronicLibraryBg from '@/public/img/Electronic-library-img.png';

function ElectronicLibrary() {
  return (

    <div className='relative my-12'>
        {/* تصویر کتابخوان */}
        <div className="lg:absolute right-[130px] bottom-[213px] z-30">
            <Image
             src={bibliophile}
             alt="Bibliophile Animation"
             height={395}
             width={540}
            quality={100}
             priority
             className='lg:w-full w-5/6 object-cover mx-auto'
                />
        </div>
        <div className="lg:relative hidden lg:block ">
            <div className="lg:absolute left-[91px] top-16">
                <Image
                src={ElectronicLibraryBg}
                alt="Electronic Library Background"
                height={638}
                quality={100}
                priority />
            </div>
        </div>
        <div className="lg:relative lg:my-56 lg:py-28 lg:me-40 overflow-hidden">
            {/* گرادیانت و تصویر پس‌زمینه */}
            <div className="lg:absolute lg:block hidden inset-0 bg-gradient-to-r from-[#9996fa6c] from-30% via-[#0578B9] via-90% to-[#0578B9] to-90% transform skew-y-3 origin-top-left">
            </div>
            {/* محتوای متن */}
            <div className="grid grid-cols-8 container mx-auto lg:relative z-10">
                <div className="lg:col-span-3 col-span-8"></div>
                <div className="lg:col-span-5 col-span-8">
                <div className="lg:ms-10 lg:ps-6 px-4 flex flex-col lg:items-start items-center">
                    <span className="text-dark text-3xl mb-4 font-bold">
                    کتابخانه الکترونیکی عمرانی
                    </span>
                    <p className="text-base text-secondary mb-6 leading-relaxed font-medium text-justify">
                    خدمات کتابخانه مجازی آنلاین موسسه دیدعمران شامل تمامی آیین‌نامه داخلی (مباحث 22 گانه، راهنمای جوش، استاندارد 2800 و ...) و آیین‌نامه‌های بین‌المللی (ASCE7, ACI, AISC, JSCE, …) و نشریه‌های داخلی و خارجی (نشریه 543، IBS، FEMA و ...) است. تمامی مهندسین عمران و پژوهشگران در سراسر کشور این امکان را دارند تا از این کتابخانه در راستای آمادگی آزمون‌های نظام مهندسی نظارت-اجراء-محاسبات عمران، یادگیری و فعالیت پژوهشی خود استفاده نمایند.
                    </p>
                    <Link
                    href="#"
                    className="text-white bg-did rounded-2xl text-sm px-6 py-3 hover:bg-[#0578B9] transition-colors duration-300"
                    >
                    مشاهده کتابخانه دید
                    </Link>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ElectronicLibrary;