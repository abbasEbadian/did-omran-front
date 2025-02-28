import Image from 'next/image'
import online from '@/public/online-test.svg'
import Link from 'next/link'

function OnlineExam() {
  return (
    <div className='relative'>
    <div className="relative lg:my-64 my-5 lg:py-28 py-4 lg:ms-40 ms-0  overflow-hidden ">
      {/* گرادیانت و تصویر پس‌زمینه */}
      <div className="hidden lg:flex lg:absolute inset-0 bg-gradient-to-l from-[#9996fa6c] from-30% via-[#0578B9] via-90% to-[#0578B9] to-90% transform -skew-y-3 origin-top-right z-0">
      </div>
      <div className="grid grid-cols-8 container mx-auto relative z-20">
            <div className="lg:col-span-5 col-span-8">
                <div className="lg:ms-10 lg:ps-10 px-4 lg:px-0 flex flex-col lg:items-start items-center z-50 ">
                    <span className="text-dark text-3xl mb-4">
                    آزمون آنلاین مهندسی
                    </span>
                    <p className="text-base text-secondary mb-6 text-justify w-4/5 ">
                    خدمات تخصصی آزمون آنلاین موسسه دیدعمران ویژه آمادگی آزمون‌های نظام مهندسی (نظارت-اجراء-محاسبات) و کارشناس رسمی دادگستری (راه و ساختمان) است. تمامی مهندسین این امکان را دارند که از آزمون‌های آزمایشی استاندارد، آزمون‌های ادواری، آزمون‌های تألیفی و بانک آزمون‌های تخصصی دیدعمران ویژه رشته عمران و معماری استفاده نمایند.
                    </p>
                    <Link href="/exams" className="text-white bg-did rounded-2xl text-sm px-4 py-3">مشاهده آزمون‌های دید عمران</Link>

                </div>
            </div>
            <div className="lg:col-span-3 col-span-8"></div>
        </div>

    </div>
    <div className="lg:absolute left-[130px] top-[300px]">
            <Image
              src={online}
              alt="آزمون آنلاین مهندسی"
              width={500} // Adjust width as needed
              height={395}
              priority // Optional: if the image is above the fold
              className='object-cover lg:w-full w-4/5 mx-auto '
            />
        </div>
    </div>
  )
}

export default OnlineExam