import Image from 'next/image'
import Link from 'next/link'
import IoAddSharp from '@/app/components/icons/IoAddSharp.svg'
import AccordionTickets from '@/app/components/tickets/AccordionTickets'
import TicketsTitle from '@/app/components/dashboard/tickets/TicketsTitle'

function page() {
  return (
    <>
 
      <TicketsTitle/>
      <div className="flex flex-col items-start justify-start gap-3 pt-3">
      <span className="text-accent font-semibold">کاربر گرامی؛</span>
      <p className="text-secondary text-sm">لطفاً قبل از ارسال تیکت، سوالات متداول را در ادامه مطالعه کنید، درصورتی که مشکل/سوال شما در موارد زیر وجود نداشت از طریق تیکت سوال/مشکل را به صورت کامل شرح دهید. پشتیبانان دید عمران ۲۴ ساعته پاسخگوی سوالات شما هستند.</p>
      </div>
      <AccordionTickets/>
      <div className="flex items-center justify-start gap-1 my-8">
          <span className="text-accent text-sm font-semibold">مشکلی دیگری دارید؟  اقدام به ثبت تیکت جدید نمائید:</span>
          <Link href="/dashboard/tickets/new" className="bg-blue700 rounded-2xl px-5 py-2 flex items-center gap-2 text-white">
              <Image
              src={IoAddSharp}
              alt="BsFacebook Img"
              height={24} 
              width={24}/>
              <span className="text-white">ثبت تیکت جدید</span>
          </Link>
      </div>
    </>
  )
}

export default page