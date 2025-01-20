import Image from 'next/image'
import Link from 'next/link'
import bibliophile from '@/app/components/icons/bibliophile-animate.svg'
import ElectronicLibraryBg from '@/public/img/Electronic-library-img.png'


function ElectronicLibrary() {
  return (
    <>
    <div className="relative my-56 bg-gradient-to-r from-[#9996FA] from-30% via-[#0578B9] via-90% to-[#0578B9] to-90% py-28 me-32 rounded-se-3xl">
        <div className="absolute -left-[91px] -bottom-8">
        <Image
            src={ElectronicLibraryBg}
            alt="Consultation Img"
            height={638} />
        </div>
        <div className="absolute right-[130px] top-0   ">
            <Image
            src={bibliophile}
            alt="Consultation Img"
            height={395} />
        </div>
        <div className="grid grid-cols-8 container mx-auto">
            <div className="col-span-3"></div>
            <div className="col-span-5">
                <div className="ms-10 ps-6 flex flex-col items-start ">
                    <span className="text-dark text-3xl mb-4">
                    کتابخانه الکترونیکی عمرانی
                    </span>
                    <p className="text-base text-secondary mb-6">
                    خدمات کتابخانه مجازی آنلاین موسسه دیدعمران شامل تمامی آیین‌نامه داخلی (مباحث 22 گانه، راهنمانی جوش، استاندارد 2800 و ...) و آیین‌نامه‌های بین‌المللی (ASCE7, ACI, AISC, JSCE, …) و نشریه‌های داخلی و خارجی (نشریه 543، IBS، FEMA و ...) است. تمامی مهندسین عمران و پژوهشگران در سراسر کشور این امکان را دارند تا از این کتابخانه در راستای آمادگی آزمون‌های نظام مهندسی نظارت-اجراء-محاسبات عمران، یادگیری و فعالیت پژوهشی خود استفاده نمایند.
                    </p>
                    <Link href="#" className="text-white bg-did rounded-2xl text-sm px-4 py-3">مشاهده کتابخانه دید</Link>

                </div>
            </div>
           
      
        </div>
    </div>
    </>
  )
}

export default ElectronicLibrary