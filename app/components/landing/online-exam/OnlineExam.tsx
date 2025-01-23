import Image from 'next/image'
import online from '@/public/online-test.svg'
import Link from 'next/link'

function OnlineExam() {
  return (
    <>
    <div className="relative my-64 py-28 ms-40  overflow-hidden ">
      {/* گرادیانت و تصویر پس‌زمینه */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#9996fa6c] from-30% via-[#0578B9] via-90% to-[#0578B9] to-90% transform -skew-y-3 origin-top-right z-0">
      </div>
      <div className="grid grid-cols-8 container mx-auto relative z-20">
            <div className="col-span-5">
                <div className="ms-10 ps-10 flex flex-col items-start z-50 ">
                    <span className="text-dark text-3xl mb-4">
                    آزمون آنلاین مهندسی
                    </span>
                    <p className="text-base text-secondary mb-6">
                    خدمات تخصصی آزمون آنلاین موسسه دیدعمران ویژه آمادگی آزمون‌های نظام مهندسی (نظارت-اجراء-محاسبات) و کارشناس رسمی دادگستری (راه و ساختمان) است. تمامی مهندسین این امکان را دارند که از آزمون‌های آزمایشی استاندارد، آزمون‌های ادواری، آزمون‌های تألیفی و بانک آزمون‌های تخصصی دیدعمران ویژه رشته عمران و معماری استفاده نمایند.
                    </p>
                    <Link href="#" className="text-white bg-did rounded-2xl text-sm px-4 py-3">ورود به آزمون دید عمران </Link>

                </div>
            </div>
            <div className="col-span-3"></div>
        </div>

    </div>
    <div className="absolute left-[130px] top-0   ">
            <Image
              src={online}
              alt="آزمون آنلاین مهندسی"
              width={500} // Adjust width as needed
              height={395}
              priority // Optional: if the image is above the fold
            />
        </div>
    </>
  )
}

export default OnlineExam