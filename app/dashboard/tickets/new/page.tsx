import NewTicketForm from "@/app/components/dashboard/tickets/NewTicketForm";
import TicketsTitle from "@/app/components/dashboard/tickets/TicketsTitle";
import Image from "next/image";
import Link from "next/link";
import IoAddSharp from '@/app/components/icons/IoAddSharp.svg'
import TabsWithAccordions from "@/app/components/tickets/TabsWithAccordions";

function page() {
    return (
        <>
            <TicketsTitle />
            <NewTicketForm />
            <div className="flex flex-col items-start justify-start gap-3 pt-3">
                <span className="text-accent font-semibold">کاربر گرامی؛</span>
                <p className="text-accent text-sm">لطفاً قبل از ارسال تیکت، سوالات متداول را در ادامه مطالعه کنید، درصورتی که مشکل/سوال شما در موارد زیر وجود نداشت از طریق تیکت سوال/مشکل را به صورت کامل شرح دهید. پشتیبانان دید عمران ۲۴ ساعته پاسخگوی سوالات شما هستند.</p>
            </div>
          <TabsWithAccordions/>
          
        </>
    );
}

export default page;
