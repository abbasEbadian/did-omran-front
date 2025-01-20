import Image from 'next/image'
import Link from 'next/link'
import IoAddSharp from '@/app/components/icons/IoAddSharp.svg'
import BsBoxSeam from '@/app/components/icons/BsBoxSeam.svg'
import AccordionCourses from '@/app/components/training-courses/AccordionCourses'
import AccordionTickets from '@/app/components/tickets/AccordionTickets'

function page() {
  return (
    <>
    <section>
    <div className="flex items-center justify-between border-b-2 border-b-secondary700 border-dashed pb-3 ">
        <span className="text-secondary text-xl">ارسال تیکت جدید</span>
        <Link href="#" className="bg-blue rounded-2xl px-5 py-2 flex items-center gap-2 text-white">
            <Image
            src={BsBoxSeam}
            alt="BsFacebook Img"
            height={24} 
            width={24}/>
            <span className="text-white">همه تیکت ها</span>
        </Link>
    </div>
   <div className="flex flex-col items-start justify-start gap-3 pt-3">
   <span className="text-accent font-semibold">کاربر گرامی؛</span>
   <p className="text-secondary text-sm">لطفاً قبل از ارسال تیکت، سوالات متداول را در ادامه مطالعه کنید، درصورتی که مشکل/سوال شما در موارد زیر وجود نداشت از طریق تیکت سوال/مشکل را به صورت کامل شرح دهید. پشتیبانان دید عمران ۲۴ ساعته پاسخگوی سوالات شما هستند.</p>
   </div>
    <AccordionTickets/>
    <div className="flex items-center justify-start gap-1 my-8">
        <span className="text-accent text-sm font-semibold">مشکلی دیگری دارید؟  اقدام به ثبت تیکت جدید نمائید:</span>
        <Link href="#" className="bg-blue700 rounded-2xl px-5 py-2 flex items-center gap-2 text-white">
            <Image
            src={IoAddSharp}
            alt="BsFacebook Img"
            height={24} 
            width={24}/>
            <span className="text-white">ثبت تیکت جدید</span>
        </Link>
    </div>
    </section>
    </>
  )
}

export default page