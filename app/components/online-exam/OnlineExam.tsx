import Image from 'next/image'
import online from '@/public/online-test.svg'
import Link from 'next/link'

function OnlineExam() {
  return (
    <>
    <div className="relative my-24 ">
      <div className="grid grid-cols-8 container mx-auto">
            <div className="col-span-5">
                <div className="ms-10 ps-10 flex flex-col items-start ">
                    <span className="text-dark text-3xl mb-4">
                    آزمون آنلاین مهندسی
                    </span>
                    <p className="text-base text-secondary mb-6">
                    خدمات تخصصی آزمون آنلاین موسسه دیدعمران ویژه آمادگی آزمون‌های نظام مهندسی (نظارت-اجراء-محاسبات) و کارشناس رسمی دادگستری (راه و ساختمان) است. تمامی مهندسین این امکان را دارند که از آزمون‌های آزمایشی استاندارد، آزمون‌های ادواری، آزمون‌های تألیفی و بانک آزمون‌های تخصصی دیدعمران ویژه رشته عمران و معماری استفاده نمایند.
                    </p>
                    <Link href="#" className="text-whitw bg-did rounded-2xl text-sm px-4 py-3">ورود به آزمون دید عمران </Link>

                </div>
            </div>
            <div className="col-span-3"></div>
      
        </div>
        <div className="absolute left-[130px] top-0   ">
            <Image
            src={online}
            alt="Consultation Img"
            height={395} />
        </div>
    </div>
    </>
  )
}

export default OnlineExam