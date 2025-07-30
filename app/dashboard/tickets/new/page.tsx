import NewTicketForm from "@/app/components/dashboard/tickets/NewTicketForm";
import TicketsTitle from "@/app/components/dashboard/tickets/TicketsTitle";
import TabsWithAccordions from "@/app/components/tickets/TabsWithAccordions";

function Page() {
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

export default Page;
